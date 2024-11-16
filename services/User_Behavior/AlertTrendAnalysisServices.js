const AlertTrendAnalysis = require("../../models/User_Behavior/AlertTrendAnalysis");
const factory = require("../handlersFactory");
// const { uploadSingleFile } = require("../middlewares/uploadImagesMiddleWare");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create AlertTrendAnalysis
// @route     POST /api/uba/alert-trend-analysis
// @access    private
exports.createAlertTrendAnalysis = factory.create(AlertTrendAnalysis);

// @desc      Get Specific AlertTrendAnalysis by id
// @route     GET /api/uba/alert-trend-analysis/:id
// @access    Public
exports.getAlertTrendAnalysis = factory.getOne(AlertTrendAnalysis);

// @desc      Get List Of AlertTrendAnalysis
// @route     GET /api/uba/alert-trend-analysis
// @access    Public
exports.getAlertTrendAnalysiss = factory.getAll(AlertTrendAnalysis);

// @desc      Update AlertTrendAnalysis
// @route     PATCH /api/uba/alert-trend-analysis/:id
// @access    private
exports.updateAlertTrendAnalysis = factory.updateOne(AlertTrendAnalysis);

// @desc      Delete AlertTrendAnalysis
// @route     DELETE /api/uba/alert-trend-analysis/:id
// @access    private

exports.deleteAlertTrendAnalysis = factory.deleteOne(AlertTrendAnalysis);
