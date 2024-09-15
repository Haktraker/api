const SlaCompliance = require("../../models/Reports/ReportSLACompliance");
const factory = require("../handlersFactory");

// @desc      Create SLA Compliance
// @route     POST /api/reports/sla-compliance
// @access    private
exports.createSlaCompliance = factory.create(SlaCompliance);

// @desc      Get Specific SLA Compliance by id
// @route     GET /api/reports/sla-compliance/:id
// @access    Public
exports.getSlaCompliance = factory.getOne(SlaCompliance);

// @desc      Get List Of SLA Compliance
// @route     GET /api/reports/sla-compliance
// @access    Public
exports.getSlaCompliances = factory.getAll(SlaCompliance);

// @desc      Update SLA Compliance
// @route     PATCH /api/reports/sla-compliance/:id
// @access    private
exports.updateSlaCompliance = factory.updateOne(SlaCompliance);

// @desc      Delete SLA Compliance
// @route     DELETE /api/reports/sla-compliance/:id
// @access    private

exports.deleteSlaCompliance = factory.deleteOne(SlaCompliance);
