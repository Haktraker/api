const CyberSecurityTrends = require("../../models/Reports/CyberSecurityTrends");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/executive-dashboard/cyber-security-trends
// @access    private
exports.createCyberSecurityTrends = factory.create(CyberSecurityTrends);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/executive-dashboard/cyber-security-trends/:id
// @access    Public
exports.getCyberSecurityTrends = factory.getOne(CyberSecurityTrends);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/executive-dashboard/cyber-security-trends
// @access    Public
exports.getCyberSecurityTrendss = factory.getAll(CyberSecurityTrends);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/executive-dashboard/cyber-security-trends/:id
// @access    private
exports.updateCyberSecurityTrends = factory.updateOne(CyberSecurityTrends);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/executive-dashboard/cyber-security-trends/:id
// @access    private

exports.deleteCyberSecurityTrends = factory.deleteOne(CyberSecurityTrends);
