const ReportCyberRating = require("../../models/Reports/ReportCyberRating");
const factory = require("../handlersFactory");

// @desc      Create ReportCyberRating
// @route     POST /api/reports/cyber-rating
// @access    private
exports.createReportCyberRating = factory.create(ReportCyberRating);

// @desc      Get Specific ReportCyberRating by id
// @route     GET /api/reports/cyber-rating/:id
// @access    Public
exports.getReportCyberRating = factory.getOne(ReportCyberRating);

// @desc      Get List Of ReportCyberRating
// @route     GET /api/reports/cyber-rating
// @access    Public
exports.getReportCyberRatings = factory.getAll(ReportCyberRating);

// @desc      Update ReportCyberRating
// @route     PATCH /api/reports/cyber-rating/:id
// @access    private
exports.updateReportCyberRating = factory.updateOne(ReportCyberRating);

// @desc      Delete ReportCyberRating
// @route     DELETE /api/reports/cyber-rating/:id
// @access    private

exports.deleteReportCyberRating = factory.deleteOne(ReportCyberRating);
