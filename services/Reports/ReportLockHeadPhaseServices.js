const ReportLockHeadPhases = require("../../models/Reports/ReportLockHeadPhases");
const factory = require("../handlersFactory");

// @desc      Create Report Lock Head Phases
// @route     POST /api/reports/lock-head-phase
// @access    private
exports.createReportLockHeadPhase = factory.create(ReportLockHeadPhases);

// @desc      Get Specific Report Lock Head Phase by id
// @route     GET /api/reports/lock-head-phase/:id
// @access    Public
exports.getReportLockHeadPhase = factory.getOne(ReportLockHeadPhases);

// @desc      Get List Of Report Lock Head Phases
// @route     GET /api/reports/lock-head-phases
// @access    Public
exports.getReportLockHeadPhases = factory.getAll(ReportLockHeadPhases);

// @desc      Update Report Lock Head Phase
// @route     PATCH /api/reports/lock-head-phase/:id
// @access    private
exports.updateReportLockHeadPhase = factory.updateOne(ReportLockHeadPhases);

// @desc      Delete Report Lock Head Phase
// @route     DELETE /api/reports/lock-head-phase/:id
// @access    private

exports.deleteReportLockHeadPhase = factory.deleteOne(ReportLockHeadPhases);
