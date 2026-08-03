"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionTCPMTProxyAbridged = exports.TCPMTProxy = void 0;
const node_crypto_1 = require("node:crypto");
const Connection_1 = require("./Connection");
const TCPAbridged_1 = require("./TCPAbridged");
const Helpers_1 = require("../../Helpers");
const CTR_1 = require("../../crypto/CTR");
const SECRET_LEN = 16;
const PREFIX_FAKE_TLS = 0xee;
const PREFIX_DD_PADDING = 0xdd;
function decodeSecret(input) {
    return /^[0-9a-f]+$/i.test(input)
        ? Buffer.from(input, "hex")
        : Buffer.from(input, "base64");
}
function parseProxySecret(input) {
    if (!input) {
        throw new Error("MTProxy: secret is required");
    }
    const raw = decodeSecret(input);
    if (raw.length > 1 + SECRET_LEN && raw[0] === PREFIX_FAKE_TLS) {
        return {
            key: Buffer.from(raw.subarray(1, 1 + SECRET_LEN)),
            fakeTlsDomain: raw.subarray(1 + SECRET_LEN).toString("utf8"),
        };
    }
    if (raw.length === 1 + SECRET_LEN && raw[0] === PREFIX_DD_PADDING) {
        return { key: Buffer.from(raw.subarray(1)) };
    }
    if (raw.length === SECRET_LEN) {
        return { key: raw };
    }
    throw new Error(`MTProxy: secret must be ${SECRET_LEN} bytes, ` +
        `${1 + SECRET_LEN} with 0xdd prefix, ` +
        `or 0xee + ${SECRET_LEN} bytes + domain — got ${raw.length} bytes`);
}
const OBF_HEADER_LEN = 64;
const OBF_TAG_OFFSET = 56;
const OBF_DC_OFFSET = 60;
/** Header prefixes that collide with HTTP or other protocol sniffers. */
const FORBIDDEN_HEADER_PREFIXES = [
    Buffer.from("50567247", "hex"),
    Buffer.from("474554", "hex"),
    Buffer.from("504f5354", "hex"),
    Buffer.from("eeeeeeee", "hex"),
];
function pickObfuscationHeader() {
    while (true) {
        const candidate = (0, Helpers_1.generateRandomBytes)(OBF_HEADER_LEN);
        if (candidate[0] === 0xef)
            continue;
        if (candidate.subarray(4, 8).equals(Buffer.alloc(4)))
            continue;
        const head4 = candidate.subarray(0, 4);
        if (FORBIDDEN_HEADER_PREFIXES.some((p) => p.equals(head4)))
            continue;
        return candidate;
    }
}
/**
 * Generates the MTProxy obfuscation header and wraps every subsequent
 * read/write in AES-CTR. MTProxy derives mirrored CTR streams from the same
 * 64-byte header — bytes 8..56 supply the client→server key/iv, and the
 * reversed copy supplies the server→client side.
 *
 * @internal
 */
class MTProxyIO {
    constructor(connection) {
        this.stream = connection.socket;
        this.packetCodec =
            connection.PacketCodecClass;
        this.secret = connection._secret;
        this.dcId = connection._dcId;
    }
    async initHeader() {
        if (this.secret.length !== SECRET_LEN) {
            throw new Error(`MTProxy: secret must be ${SECRET_LEN} bytes, got ${this.secret.length}`);
        }
        const header = pickObfuscationHeader();
        const reversed = Buffer.from(header.subarray(8, 56)).reverse();
        const encryptKey = await (0, Helpers_1.sha256)(Buffer.concat([header.subarray(8, 40), this.secret]));
        const encryptIv = Buffer.from(header.subarray(40, 56));
        const decryptKey = await (0, Helpers_1.sha256)(Buffer.concat([reversed.subarray(0, 32), this.secret]));
        const decryptIv = Buffer.from(reversed.subarray(32, 48));
        this.encryptor = new CTR_1.CTR(encryptKey, encryptIv);
        this.decryptor = new CTR_1.CTR(decryptKey, decryptIv);
        // Stamp protocol tag and DC id (low byte first, byte 61 zeroed —
        // matches gramjs / official client behavior, even for negative DC ids).
        this.packetCodec.obfuscateTag.copy(header, OBF_TAG_OFFSET);
        header.writeInt8(this.dcId, OBF_DC_OFFSET);
        header[OBF_DC_OFFSET + 1] = 0;
        // Re-encrypt the stamped tail in place — the CTR counter ends up
        // advanced by all 64 bytes, matching the server's view.
        const encryptedTail = this.encryptor
            .encrypt(header)
            .subarray(OBF_TAG_OFFSET, OBF_HEADER_LEN);
        encryptedTail.copy(header, OBF_TAG_OFFSET);
        this.header = header;
    }
    async read(n) {
        const data = await this.stream.readExactly(n);
        return this.decryptor.encrypt(data);
    }
    readExactly(n) {
        return this.read(n);
    }
    write(data) {
        this.stream.write(this.encryptor.encrypt(data));
    }
}
const TLS_RECORD_HEADER_LEN = 5;
const TLS_RECORD_MAX_PAYLOAD = 16384;
const TLS_RECORD_HANDSHAKE = 0x16;
const TLS_RECORD_CHANGE_CIPHER_SPEC = 0x14;
const TLS_RECORD_APPLICATION_DATA = 0x17;
const TLS_APP_DATA_PREFIX = Buffer.from([0x17, 0x03, 0x03]);
const FAKE_TLS_HELLO_SIZE = 517;
const FAKE_TLS_HELLO_RANDOM_OFFSET = 11;
const FAKE_TLS_HELLO_RANDOM_LEN = 32;
/** 5-byte TLS record + 4-byte handshake header + 2-byte version = 114. */
const FAKE_TLS_FIXED_HEADER_SIZE = 114;
const FAKE_TLS_RANDOM_TIMESTAMP_XOR_OFFSET = 28;
const GREASE = 0x0a;
async function readTlsRecord(stream) {
    const hdr = await stream.readExactly(TLS_RECORD_HEADER_LEN);
    const type = hdr[0];
    const len = hdr.readUInt16BE(3);
    const payload = await stream.readExactly(len);
    return { type, payload };
}
function tlsRecordTypeName(type) {
    switch (type) {
        case TLS_RECORD_HANDSHAKE:
            return "Handshake";
        case TLS_RECORD_CHANGE_CIPHER_SPEC:
            return "ChangeCipherSpec";
        case TLS_RECORD_APPLICATION_DATA:
            return "ApplicationData";
        default:
            return `0x${type.toString(16).padStart(2, "0")}`;
    }
}
function tlsExtension(type, body) {
    const content = Buffer.isBuffer(body) ? body : Buffer.from(body);
    const out = Buffer.alloc(4 + content.length);
    out.writeUInt16BE(type, 0);
    out.writeUInt16BE(content.length, 2);
    content.copy(out, 4);
    return out;
}
function sniExtension(domain) {
    const dom = Buffer.from(domain, "utf8");
    const body = Buffer.alloc(5 + dom.length);
    body.writeUInt16BE(dom.length + 3, 0);
    body.writeUInt8(0x00, 2);
    body.writeUInt16BE(dom.length, 3);
    dom.copy(body, 5);
    return tlsExtension(0x0000, body);
}
function keyShareExtension() {
    const x25519Pub = (0, Helpers_1.generateRandomBytes)(32);
    const entries = Buffer.concat([
        Buffer.from([GREASE, GREASE, 0x00, 0x01, 0x00]),
        Buffer.from([0x00, 0x1d, 0x00, 0x20]),
        x25519Pub,
    ]);
    const body = Buffer.alloc(2 + entries.length);
    body.writeUInt16BE(entries.length, 0);
    entries.copy(body, 2);
    return tlsExtension(0x0033, body);
}
/**
 * Input-independent extensions in Chrome 105+ order. SNI and key_share are
 * spliced in at runtime (see `buildClientHello`). Layout is intentionally
 * stable for JA3 fingerprint similarity.
 */
const STATIC_EXTENSIONS = [
    tlsExtension(0x0a0a, []),
    tlsExtension(0x0017, []),
    tlsExtension(0xff01, [0x00]),
    tlsExtension(0x000a, [
        0x00, 0x08, GREASE, GREASE, 0x00, 0x1d, 0x00, 0x17, 0x00, 0x18,
    ]),
    tlsExtension(0x000b, [0x01, 0x00]),
    tlsExtension(0x0023, []),
    tlsExtension(0x0010, [
        0x00, 0x0c, 0x02, 0x68, 0x32, 0x08, 0x68, 0x74, 0x74, 0x70, 0x2f, 0x31,
        0x2e, 0x31,
    ]),
    tlsExtension(0x0005, [0x01, 0x00, 0x00, 0x00, 0x00]),
    tlsExtension(0x000d, [
        0x00, 0x10, 0x04, 0x03, 0x08, 0x04, 0x04, 0x01, 0x05, 0x03, 0x08, 0x05,
        0x05, 0x01, 0x08, 0x06, 0x06, 0x01,
    ]),
    tlsExtension(0x0012, []),
    tlsExtension(0x002d, [0x01, 0x01]),
    tlsExtension(0x002b, [0x06, GREASE, GREASE, 0x03, 0x04, 0x03, 0x03]),
    tlsExtension(0x001b, [0x02, 0x00, 0x02]),
    tlsExtension(0x0a0a, [0x00]),
];
const STATIC_EXTENSIONS_LEN = STATIC_EXTENSIONS.reduce((s, e) => s + e.length, 0);
const CIPHER_SUITES = Buffer.from([
    GREASE, GREASE,
    0x13, 0x01, 0x13, 0x02, 0x13, 0x03,
    0xc0, 0x2b, 0xc0, 0x2f, 0xc0, 0x2c, 0xc0, 0x30,
    0xcc, 0xa9, 0xcc, 0xa8,
    0xc0, 0x13, 0xc0, 0x14,
    0x00, 0x9c, 0x00, 0x9d, 0x00, 0x2f, 0x00, 0x35,
]);
/**
 * Builds the 517-byte Chrome-like TLS 1.2 ClientHello. The 32-byte `random`
 * field at offset 11 is left zeroed — the caller stamps it with the
 * HMAC-derived value before sending.
 */
function buildClientHello(domain, sessionId) {
    const sni = sniExtension(domain);
    const keyShare = keyShareExtension();
    let extensionsLen = STATIC_EXTENSIONS_LEN + sni.length + keyShare.length;
    const paddingPayloadLen = FAKE_TLS_HELLO_SIZE - FAKE_TLS_FIXED_HEADER_SIZE - extensionsLen - 4;
    if (paddingPayloadLen < 0) {
        throw new Error(`FakeTLS: domain too long (${domain.length} bytes); ClientHello overflows by ${-paddingPayloadLen} bytes`);
    }
    const padding = tlsExtension(0x0015, Buffer.alloc(paddingPayloadLen));
    extensionsLen += padding.length;
    // SNI follows the leading GREASE; key_share follows the SCT extension.
    const KEY_SHARE_INSERT_AFTER = 11;
    const extensions = [
        STATIC_EXTENSIONS[0],
        sni,
        ...STATIC_EXTENSIONS.slice(1, KEY_SHARE_INSERT_AFTER + 1),
        keyShare,
        ...STATIC_EXTENSIONS.slice(KEY_SHARE_INSERT_AFTER + 1),
        padding,
    ];
    const hello = Buffer.concat([
        Buffer.from([0x16, 0x03, 0x01, 0x02, 0x00]),
        Buffer.from([0x01, 0x00, 0x01, 0xfc]),
        Buffer.from([0x03, 0x03]),
        Buffer.alloc(FAKE_TLS_HELLO_RANDOM_LEN),
        Buffer.from([sessionId.length]),
        sessionId,
        Buffer.from([
            (CIPHER_SUITES.length >> 8) & 0xff,
            CIPHER_SUITES.length & 0xff,
        ]),
        CIPHER_SUITES,
        Buffer.from([0x01, 0x00]),
        Buffer.from([(extensionsLen >> 8) & 0xff, extensionsLen & 0xff]),
        ...extensions,
    ]);
    if (hello.length !== FAKE_TLS_HELLO_SIZE) {
        throw new Error(`FakeTLS: ClientHello size mismatch — got ${hello.length}, expected ${FAKE_TLS_HELLO_SIZE}`);
    }
    return hello;
}
/**
 * Wraps a {@link PromisedNetSockets} in MTProto fake-TLS framing. On
 * {@link handshake}: sends a Chrome-like ClientHello with the random field
 * stamped to `HMAC-SHA256(secret, hello)` (last 4 bytes XOR'd with unix
 * time), then verifies the server's random equals
 * `HMAC-SHA256(secret, client_random || server_response_zeroed)`. Post-
 * handshake, all bytes ride inside TLS application_data records.
 *
 * Exposes only the subset of {@link PromisedNetSockets} consumed by
 * {@link MTProxyIO} and the {@link ObfuscatedConnection} base class so it
 * can be hot-swapped in place of the raw socket.
 *
 * @internal
 */
class FakeTlsSocket {
    constructor(inner, secret, domain) {
        this.clientRandom = Buffer.alloc(0);
        this.readBuf = Buffer.alloc(0);
        if (secret.length !== SECRET_LEN) {
            throw new Error(`FakeTLS: secret must be ${SECRET_LEN} bytes, got ${secret.length}`);
        }
        this.inner = inner;
        this.secret = secret;
        this.domain = domain;
    }
    async handshake() {
        const hello = this.sendClientHello();
        this.inner.write(hello);
        await this.readAndVerifyServerHandshake();
    }
    write(data) {
        for (let off = 0; off < data.length; off += TLS_RECORD_MAX_PAYLOAD) {
            const chunkLen = Math.min(TLS_RECORD_MAX_PAYLOAD, data.length - off);
            const hdr = Buffer.alloc(TLS_RECORD_HEADER_LEN);
            TLS_APP_DATA_PREFIX.copy(hdr, 0);
            hdr.writeUInt16BE(chunkLen, 3);
            this.inner.write(Buffer.concat([hdr, data.subarray(off, off + chunkLen)]));
        }
    }
    async readExactly(n) {
        while (this.readBuf.length < n) {
            const { type, payload } = await readTlsRecord(this.inner);
            if (type !== TLS_RECORD_APPLICATION_DATA)
                continue;
            this.readBuf = Buffer.concat([this.readBuf, payload]);
        }
        const out = Buffer.from(this.readBuf.subarray(0, n));
        this.readBuf = this.readBuf.subarray(n);
        return out;
    }
    async close() {
        await this.inner.close();
    }
    sendClientHello() {
        const sessionId = (0, Helpers_1.generateRandomBytes)(32);
        const hello = buildClientHello(this.domain, sessionId);
        const stamp = (0, node_crypto_1.createHmac)("sha256", this.secret).update(hello).digest();
        const now = Math.floor(Date.now() / 1000) >>> 0;
        const lastWord = (stamp.readUInt32BE(FAKE_TLS_RANDOM_TIMESTAMP_XOR_OFFSET) ^ now) >>>
            0;
        stamp.writeUInt32BE(lastWord, FAKE_TLS_RANDOM_TIMESTAMP_XOR_OFFSET);
        stamp.copy(hello, FAKE_TLS_HELLO_RANDOM_OFFSET);
        this.clientRandom = stamp;
        return hello;
    }
    // Expects the canonical 3-record server response. Anything else fails
    // loudly rather than silently corrupting the downstream MTProxy stream.
    async readAndVerifyServerHandshake() {
        const expectedTypes = [
            TLS_RECORD_HANDSHAKE,
            TLS_RECORD_CHANGE_CIPHER_SPEC,
            TLS_RECORD_APPLICATION_DATA,
        ];
        const chunks = [];
        let serverRandomOffset = -1;
        let offset = 0;
        for (let i = 0; i < expectedTypes.length; i++) {
            const { type, payload } = await readTlsRecord(this.inner);
            if (type !== expectedTypes[i]) {
                throw new Error(`FakeTLS: expected ${tlsRecordTypeName(expectedTypes[i])} at record ${i}, got ${tlsRecordTypeName(type)}`);
            }
            if (i === 0) {
                serverRandomOffset = offset + FAKE_TLS_HELLO_RANDOM_OFFSET;
            }
            const hdr = Buffer.alloc(TLS_RECORD_HEADER_LEN);
            hdr[0] = type;
            hdr[1] = 0x03;
            hdr[2] = 0x03;
            hdr.writeUInt16BE(payload.length, 3);
            chunks.push(hdr, payload);
            offset += TLS_RECORD_HEADER_LEN + payload.length;
        }
        const serverResp = Buffer.concat(chunks);
        const serverRandom = Buffer.from(serverResp.subarray(serverRandomOffset, serverRandomOffset + FAKE_TLS_HELLO_RANDOM_LEN));
        serverResp.fill(0, serverRandomOffset, serverRandomOffset + FAKE_TLS_HELLO_RANDOM_LEN);
        const expected = (0, node_crypto_1.createHmac)("sha256", this.secret)
            .update(this.clientRandom)
            .update(serverResp)
            .digest();
        if (!expected.equals(serverRandom)) {
            throw new Error("FakeTLS: server HMAC verification failed");
        }
    }
}
/**
 * Connection that routes traffic through a Telegram MTProxy server. Connects
 * to the proxy address (not Telegram directly), performs the MTProxy
 * obfuscated handshake, and tunnels MTProto traffic through with AES-CTR
 * encryption. When the secret carries a fake-TLS prefix the underlying
 * socket is first wrapped in a {@link FakeTlsSocket}.
 *
 * Not intended to be used directly — use {@link ConnectionTCPMTProxyAbridged}
 * instead, or pass an {@link MTProxyType} config to `TelegramClientParams.proxy`
 * and the client will select the correct connection class automatically.
 */
class TCPMTProxy extends Connection_1.ObfuscatedConnection {
    constructor({ dcId, loggers, proxy, socket, }) {
        super({
            ip: proxy.ip,
            port: proxy.port,
            dcId,
            loggers,
            socket,
            proxy,
        });
        this.ObfuscatedIO = MTProxyIO;
        if (!("MTProxy" in proxy)) {
            throw new Error("This connection only supports MTProxies");
        }
        const parsed = parseProxySecret(proxy.secret);
        this._secret = parsed.key;
        this._fakeTlsDomain = parsed.fakeTlsDomain;
    }
    async _initConn() {
        if (this._fakeTlsDomain) {
            const tls = new FakeTlsSocket(this.socket, this._secret, this._fakeTlsDomain);
            await tls.handshake();
            this.socket = tls;
        }
        await super._initConn();
    }
}
exports.TCPMTProxy = TCPMTProxy;
/**
 * MTProxy connection using the Abridged packet codec — automatically selected
 * when `proxy.MTProxy` is `true`.
 */
class ConnectionTCPMTProxyAbridged extends TCPMTProxy {
    constructor() {
        super(...arguments);
        this.PacketCodecClass = TCPAbridged_1.AbridgedPacketCodec;
    }
}
exports.ConnectionTCPMTProxyAbridged = ConnectionTCPMTProxyAbridged;
