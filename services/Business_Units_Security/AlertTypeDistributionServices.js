const AlertTypeDistribution = require("../../models/Business_Units_Security/AlertTypeDistribution");
const factory = require("../handlersFactory");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create AlertTypeDistribution
// @route     POST /api/bu-security/alert-type-distribution
// @access    private
exports.createAlertTypeDistribution = factory.create(AlertTypeDistribution);

// @desc      Get Specific AlertTypeDistribution by id
// @route     GET /api/bu-security/alert-type-distribution/:id
// @access    Public
exports.getAlertTypeDistribution = factory.getOne(AlertTypeDistribution);

// @desc      Get List Of AlertTypeDistribution
// @route     GET /api/bu-security/alert-type-distribution
// @access    Public
exports.getAlertTypesDistribution = factory.getAll(AlertTypeDistribution);

// @desc      Update AlertTypeDistribution
// @route     PATCH /api/bu-security/alert-type-distribution/:id
// @access    private
exports.updateAlertTypeDistribution = factory.updateOne(AlertTypeDistribution);

// @desc      Delete AlertTypeDistribution
// @route     DELETE /api/bu-security/alert-type-distribution/:id
// @access    private

exports.deleteAlertTypeDistribution = factory.deleteOne(AlertTypeDistribution);
