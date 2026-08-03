"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kBaseUploadDcShift = exports.kBaseDownloadDcShift = exports.kMaxMediaDcCount = exports.kExportMediaDcShift = exports.kExportDcShift = exports.kUpdaterDcShift = exports.kLogoutDcShift = exports.kConfigDcShift = exports.kDcShift = void 0;
exports.bareDcId = bareDcId;
exports.shiftDcId = shiftDcId;
exports.getDcIdShift = getDcIdShift;
exports.downloadDcId = downloadDcId;
exports.uploadDcId = uploadDcId;
exports.isDownloadDcId = isDownloadDcId;
exports.isUploadDcId = isUploadDcId;
exports.kDcShift = 10000;
exports.kConfigDcShift = 0x01;
exports.kLogoutDcShift = 0x02;
exports.kUpdaterDcShift = 0x03;
exports.kExportDcShift = 0x04;
exports.kExportMediaDcShift = 0x05;
exports.kMaxMediaDcCount = 0x10;
exports.kBaseDownloadDcShift = 0x10;
exports.kBaseUploadDcShift = 0x20;
function bareDcId(shiftedDcId) {
    return shiftedDcId % exports.kDcShift;
}
function shiftDcId(dcId, shift) {
    return dcId + exports.kDcShift * shift;
}
function getDcIdShift(shiftedDcId) {
    return Math.floor(shiftedDcId / exports.kDcShift);
}
function downloadDcId(dcId, index) {
    return shiftDcId(dcId, exports.kBaseDownloadDcShift + index);
}
function uploadDcId(dcId, index) {
    return shiftDcId(dcId, exports.kBaseUploadDcShift + index);
}
function isDownloadDcId(shiftedDcId) {
    const shift = getDcIdShift(shiftedDcId);
    return (shift >= exports.kBaseDownloadDcShift &&
        shift < exports.kBaseDownloadDcShift + exports.kMaxMediaDcCount);
}
function isUploadDcId(shiftedDcId) {
    const shift = getDcIdShift(shiftedDcId);
    return (shift >= exports.kBaseUploadDcShift &&
        shift < exports.kBaseUploadDcShift + exports.kMaxMediaDcCount);
}
