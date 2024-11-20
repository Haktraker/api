const VulnerabilitiesAndPatched = require("../../models/Business_Units_Security/VulnerabilitiesAndPatched");
const factory = require("../handlersFactory");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create VulnerabilitiesAndPatched
// @route     POST /api/bu-security/vulnerabilities-and-patched
// @access    private
exports.createVulnerabilitiesAndPatched = factory.create(
  VulnerabilitiesAndPatched
);

// @desc      Get Specific VulnerabilitiesAndPatched by id
// @route     GET /api/bu-security/vulnerabilities-and-patched/:id
// @access    Public
exports.getVulnerabilitiesAndPatched = factory.getOne(
  VulnerabilitiesAndPatched
);

// @desc      Get List Of VulnerabilitiesAndPatched
// @route     GET /api/bu-security/vulnerabilities-and-patched
// @access    Public
exports.getVulnerabilitiesAndPatcheds = factory.getAll(
  VulnerabilitiesAndPatched
);

// @desc      Update VulnerabilitiesAndPatched
// @route     PATCH /api/bu-security/vulnerabilities-and-patched/:id
// @access    private
exports.updateVulnerabilitiesAndPatched = factory.updateOne(
  VulnerabilitiesAndPatched
);

// @desc      Delete VulnerabilitiesAndPatched
// @route     DELETE /api/bu-security/vulnerabilities-and-patched/:id
// @access    private

exports.deleteVulnerabilitiesAndPatched = factory.deleteOne(
  VulnerabilitiesAndPatched
);
