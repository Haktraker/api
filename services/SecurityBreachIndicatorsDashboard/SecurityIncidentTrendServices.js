const SecurityIncidentTrend = require("../../models/SecurityBreachIndicatorsDashboard/SecurityIncidentTrend");
const factory = require("../handlersFactory");

// @desc      Create Cyber Resilience Time
// @route     POST /api/security-breach-indicators-dashboard/security-incident-trends
// @access    private
exports.createSecurityIncidentTrend = factory.create(
  SecurityIncidentTrend
);

// @desc      Get Specific Cyber Resilience Time by id
// @route     GET /api/security-breach-indicators-dashboard/security-incident-trends/:id
// @access    Public
exports.getSecurityIncidentTrend = factory.getOne(
  SecurityIncidentTrend
);

// @desc      Get List Of Cyber Resilience Time
// @route     GET /api/security-breach-indicators-dashboard/security-incident-trends
// @access    Public
exports.getSecurityIncidentTrends = factory.getAll(
  SecurityIncidentTrend
);

// @desc      Update Cyber Resilience Time
// @route     PATCH /api/security-breach-indicators-dashboard/security-incident-trends/:id
// @access    private
exports.updateSecurityIncidentTrend = factory.updateOne(
  SecurityIncidentTrend
);

// @desc      Delete Cyber Resilience Time
// @route     DELETE /api/security-breach-indicators-dashboard/security-incident-trends/:id
// @access    private

exports.deleteSecurityIncidentTrend = factory.deleteOne(
  SecurityIncidentTrend
);
