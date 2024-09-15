const ReportUserBehavior = require("../../models/Reports/ReportUserBehavior");
const factory = require("../handlersFactory");

// @desc      Create ReportUserBehavior
// @route     POST /api/reports/user-behavior
// @access    private
exports.createReportUserBehavior = factory.create(ReportUserBehavior);

// @desc      Get Specific ReportUserBehavior by id
// @route     GET /api/reports/user-behavior/:id
// @access    Public
exports.getReportUserBehavior = factory.getOne(ReportUserBehavior);

// @desc      Get List Of ReportUserBehavior
// @route     GET /api/reports/user-behavior
// @access    Public
exports.getReportUserBehaviors = factory.getAll(ReportUserBehavior);

// @desc      Update ReportUserBehavior
// @route     PATCH /api/reports/user-behavior/:id
// @access    private
exports.updateReportUserBehavior = factory.updateOne(ReportUserBehavior);

// @desc      Delete ReportUserBehavior
// @route     DELETE /api/reports/user-behavior/:id
// @access    private

exports.deleteReportUserBehavior = factory.deleteOne(ReportUserBehavior);
