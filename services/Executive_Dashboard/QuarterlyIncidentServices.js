const QuarterlyIncident = require("../../models/Reports/QuarterlyIncident");
const factory = require("../handlersFactory");

// @desc      Create Security Posture Score
// @route     POST /api/executive-dashboard/quarterly-incident
// @access    private
exports.createQuarterlyIncident = factory.create(QuarterlyIncident);

// @desc      Get Specific Security Posture Score by id
// @route     GET /api/executive-dashboard/quarterly-incident/:id
// @access    Public
exports.getQuarterlyIncident = factory.getOne(QuarterlyIncident);

// @desc      Get List Of Security Posture Score
// @route     GET /api/executive-dashboard/quarterly-incident
// @access    Public
exports.getQuarterlyIncidents = factory.getAll(QuarterlyIncident);

// @desc      Update Security Posture Score
// @route     PATCH /api/executive-dashboard/quarterly-incident/:id
// @access    private
exports.updateQuarterlyIncident = factory.updateOne(QuarterlyIncident);

// @desc      Delete Security Posture Score
// @route     DELETE /api/executive-dashboard/quarterly-incident/:id
// @access    private

exports.deleteQuarterlyIncident = factory.deleteOne(QuarterlyIncident);
