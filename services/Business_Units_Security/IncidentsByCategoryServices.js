const IncidentsByCategory = require("../../models/Business_Units_Security/IncidentsByCategory");
const factory = require("../handlersFactory");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create IncidentsByCategory
// @route     POST /api/bu-security/incidents-by-category
// @access    private
exports.createIncidentByCategory = factory.create(IncidentsByCategory);

// @desc      Get Specific IncidentsByCategory by id
// @route     GET /api/bu-security/incidents-by-category/:id
// @access    Public
exports.getIncidentByCategory = factory.getOne(IncidentsByCategory);

// @desc      Get List Of IncidentsByCategory
// @route     GET /api/bu-security/incidents-by-category
// @access    Public
exports.getIncidentsByCategory = factory.getAll(IncidentsByCategory);

// @desc      Update IncidentsByCategory
// @route     PATCH /api/bu-security/incidents-by-category/:id
// @access    private
exports.updateIncidentByCategory = factory.updateOne(IncidentsByCategory);

// @desc      Delete IncidentsByCategory
// @route     DELETE /api/bu-security/incidents-by-category/:id
// @access    private

exports.deleteIncidentByCategory = factory.deleteOne(IncidentsByCategory);
