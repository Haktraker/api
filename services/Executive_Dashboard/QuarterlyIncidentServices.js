const QuarterlyIncident = require("../../models/Executive_Dashboard/QuarterlyIncident");
const factory = require("../handlersFactory");

// @desc      Create Quarterly incident
// @route     POST /api/executive-dashboard/quarterly-incident
// @access    private
exports.createQuarterlyIncident = factory.create(QuarterlyIncident);

// @desc      Get Specific Quarterly incident by id
// @route     GET /api/executive-dashboard/quarterly-incident/:id
// @access    Public
exports.getQuarterlyIncident = factory.getOne(QuarterlyIncident);

// @desc      Get List Of Quarterly incident
// @route     GET /api/executive-dashboard/quarterly-incident
// @access    Public
exports.getQuarterlyIncidents = factory.getAll(QuarterlyIncident);

// @desc      Update Quarterly incident
// @route     PATCH /api/executive-dashboard/quarterly-incident/:id
// @access    private
exports.updateQuarterlyIncident = factory.updateOne(QuarterlyIncident);

// @desc      Delete Quarterly incident
// @route     DELETE /api/executive-dashboard/quarterly-incident/:id
// @access    private

exports.deleteQuarterlyIncident = factory.deleteOne(QuarterlyIncident);
