const SuspiciousIPs = require("../../models/Threat_Intelligence/SuspiciousIPs");
const factory = require("../handlersFactory");

// @desc      Create SuspiciousIPs
// @route     POST /api/threat_intelligence/suspiciousips
// @access    private
exports.createSuspiciousIPs = factory.create(SuspiciousIPs);

// @desc      Get Specific APTFeed by id
// @route     GET /api/threat_intelligence/suspiciousips/:id
// @access    Public
exports.getSuspiciousIP = factory.getOne(SuspiciousIPs);

// @desc      Get List Of SuspiciousIPs
// @route     GET /api/threat_intelligence/suspiciousips
// @access    Public
exports.getSuspiciousIPs = factory.getAll(SuspiciousIPs);

// @desc      Update APTFeed
// @route     PATCH /api/threat_intelligence/suspiciousips/:id
// @access    private
exports.updateSuspiciousIP = factory.updateOne(SuspiciousIPs);

// @desc      Delete APTFeed
// @route     DELETE /api/threat_intelligence/suspiciousips/:id
// @access    private

exports.deleteSuspiciousIP = factory.deleteOne(SuspiciousIPs);
