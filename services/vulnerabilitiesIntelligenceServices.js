const VulnerabilitiesIntelligence = require("../models/VulnerabilitiesIntelligence");
const factory = require("./handlersFactory");

// @desc      Create VulnerabilitiesIntelligence
// @route     POST /api vulnerabilities-intelligence
// @access    private
exports.createVulnerabilitiesIntelligence = factory.create(
  VulnerabilitiesIntelligence
);

// @desc      Get Specific VulnerabilitiesIntelligence by id
// @route     GET /api vulnerabilities-intelligence/:id
// @access    Public
exports.getVulnerabilitiesIntelligence = factory.getOne(
  VulnerabilitiesIntelligence
);

// @desc      Get List Of VulnerabilitiesIntelligence
// @route     GET /api vulnerabilities-intelligence
// @access    Public
exports.getVulnerabilitiesIntelligences = factory.getAll(
  VulnerabilitiesIntelligence
);

// @desc      Update VulnerabilitiesIntelligence
// @route     PATCH /api vulnerabilities-intelligence/:id
// @access    private
exports.updateVulnerabilitiesIntelligence = factory.updateOne(
  VulnerabilitiesIntelligence
);

// @desc      Delete VulnerabilitiesIntelligence
// @route     DELETE /api vulnerabilities-intelligence/:id
// @access    private

exports.deleteVulnerabilitiesIntelligence = factory.deleteOne(
  VulnerabilitiesIntelligence
);
