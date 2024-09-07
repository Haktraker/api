const ReportMonthlyVolume = require("../../models/Reports/ReportMonthlyVolume");
const factory = require("../handlersFactory");

// @desc      Create ReportMonthlyVolume
// @route     POST /api/reports/monthly-volume
// @access    private
exports.createReportMonthlyVolume = factory.create(ReportMonthlyVolume);

// @desc      Get Specific ReportMonthlyVolume by id
// @route     GET /api/reports/monthly-volume/:id
// @access    Public
exports.getReportMonthlyVolume = factory.getOne(ReportMonthlyVolume);

// @desc      Get List Of ReportMonthlyVolume
// @route     GET /api/reports/monthly-volume
// @access    Public
exports.getReportMonthlyVolumes = factory.getAll(ReportMonthlyVolume);

// @desc      Update ReportMonthlyVolume
// @route     PATCH /api/reports/monthly-volume/:id
// @access    private
exports.updateReportMonthlyVolume = factory.updateOne(ReportMonthlyVolume);

// @desc      Delete ReportMonthlyVolume
// @route     DELETE /api/reports/monthly-volume/:id
// @access    private

exports.deleteReportMonthlyVolume = factory.deleteOne(ReportMonthlyVolume);
