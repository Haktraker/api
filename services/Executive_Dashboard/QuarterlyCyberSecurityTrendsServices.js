const QuarterlyCyberSecurityTrends = require("../../models/Executive_Dashboard/QuarterlyCyberSecurityTrends");
const factory = require("../handlersFactory");

// @desc      Create Quarterly Cyber Security Trends
// @route     POST /api/executive-dashboard/cyber-security-trends
// @access    private
exports.createQuarterlyCyberSecurityTrends = factory.create(
  QuarterlyCyberSecurityTrends
);

// @desc      Get Specific Quarterly Cyber Security Trends by id
// @route     GET /api/executive-dashboard/cyber-security-trends/:id
// @access    Public
exports.getQuarterlyCyberSecurityTrend = factory.getOne(
  QuarterlyCyberSecurityTrends
);

// @desc      Get List Of Quarterly Cyber Security Trends
// @route     GET /api/executive-dashboard/cyber-security-trends
// @access    Public
exports.getQuarterlyCyberSecurityTrends = factory.getAll(
  QuarterlyCyberSecurityTrends
);

// @desc      Update Quarterly Cyber Security Trends
// @route     PATCH /api/executive-dashboard/cyber-security-trends/:id
// @access    private
exports.updateQuarterlyCyberSecurityTrends = factory.updateOne(
  QuarterlyCyberSecurityTrends
);

// @desc      Delete Quarterly Cyber Security Trends
// @route     DELETE /api/executive-dashboard/cyber-security-trends/:id
// @access    private

exports.deleteQuarterlyCyberSecurityTrends = factory.deleteOne(
  QuarterlyCyberSecurityTrends
);
