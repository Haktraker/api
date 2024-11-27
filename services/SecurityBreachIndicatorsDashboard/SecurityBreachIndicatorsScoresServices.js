const SecurityBreachIndicatorsScores = require("../../models/SecurityBreachIndicatorsDashboard/SecurityBreachIndicatorsScores");
const factory = require("../handlersFactory");

// @desc      Create Cyber Resilience Time
// @route     POST /api/non-compliance-gaps-dashboard/security-breach-indicators-scores
// @access    private
exports.createSecurityBreachIndicatorsScore = factory.create(
  SecurityBreachIndicatorsScores
);

// @desc      Get Specific Cyber Resilience Time by id
// @route     GET /api/non-compliance-gaps-dashboard/security-breach-indicators-scores/:id
// @access    Public
exports.getSecurityBreachIndicatorsScore = factory.getOne(
  SecurityBreachIndicatorsScores
);

// @desc      Get List Of Cyber Resilience Time
// @route     GET /api/non-compliance-gaps-dashboard/security-breach-indicators-scores
// @access    Public
exports.getSecurityBreachIndicatorsScores = factory.getAll(
  SecurityBreachIndicatorsScores
);

// @desc      Update Cyber Resilience Time
// @route     PATCH /api/non-compliance-gaps-dashboard/security-breach-indicators-scores/:id
// @access    private
exports.updateSecurityBreachIndicatorsScore = factory.updateOne(
  SecurityBreachIndicatorsScores
);

// @desc      Delete Cyber Resilience Time
// @route     DELETE /api/non-compliance-gaps-dashboard/security-breach-indicators-scores/:id
// @access    private

exports.deleteSecurityBreachIndicatorsScore = factory.deleteOne(
  SecurityBreachIndicatorsScores
);
