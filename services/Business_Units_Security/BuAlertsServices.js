const BuAlerts = require("../../models/Business_Units_Security/BuAlerts");
const factory = require("../handlersFactory");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create BuAlerts
// @route     POST /api/bu-security/bu-alerts
// @access    private
exports.createBuAlert = factory.create(BuAlerts);

// @desc      Get Specific BuAlerts by id
// @route     GET /api/bu-security/bu-alerts/:id
// @access    Public
exports.getBuAlert = factory.getOne(BuAlerts);

// @desc      Get List Of BuAlerts
// @route     GET /api/bu-security/bu-alerts
// @access    Public
exports.getBuAlerts = factory.getAll(BuAlerts);

// @desc      Update BuAlerts
// @route     PATCH /api/bu-security/bu-alerts/:id
// @access    private
exports.updateBuAlert = factory.updateOne(BuAlerts);

// @desc      Delete BuAlerts
// @route     DELETE /api/bu-security/bu-alerts/:id
// @access    private

exports.deleteBuAlert = factory.deleteOne(BuAlerts);
