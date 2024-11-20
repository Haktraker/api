const BUIncidentResponseMetrics = require("../../models/Business_Units_Security/BUIncidentResponseMetrics");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/bu-security/bu-incident-response-metrics
// @access    private
exports.createBUIncidentResponseMetric = factory.create(
  BUIncidentResponseMetrics
);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/bu-security/bu-incident-response-metrics/:id
// @access    Public
exports.getBUIncidentResponseMetric = factory.getOne(BUIncidentResponseMetrics);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/bu-security/bu-incident-response-metrics
// @access    Public
exports.getBUIncidentResponseMetrics = factory.getAll(
  BUIncidentResponseMetrics
);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/bu-security/bu-incident-response-metrics/:id
// @access    private
exports.updateBUIncidentResponseMetric = factory.updateOne(
  BUIncidentResponseMetrics
);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/bu-security/bu-incident-response-metrics/:id
// @access    private

exports.deleteBUIncidentResponseMetric = factory.deleteOne(
  BUIncidentResponseMetrics
);
