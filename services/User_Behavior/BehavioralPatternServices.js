const BehavioralPattern = require("../../models/User_Behavior/BehaviorPatternAnalysis");
const factory = require("../handlersFactory");
// const { uploadSingleFile } = require("../middlewares/uploadImagesMiddleWare");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create BehavioralPattern
// @route     POST /api/uba/behavioral-pattern
// @access    private
exports.createBehavioralPattern = factory.create(BehavioralPattern);

// @desc      Get Specific BehavioralPattern by id
// @route     GET /api/uba/behavioral-pattern/:id
// @access    Public
exports.getBehavioralPattern = factory.getOne(BehavioralPattern);

// @desc      Get List Of BehavioralPattern
// @route     GET /api/uba/behavioral-pattern
// @access    Public
exports.getBehavioralPatterns = factory.getAll(BehavioralPattern);

// @desc      Update BehavioralPattern
// @route     PATCH /api/uba/behavioral-pattern/:id
// @access    private
exports.updateBehavioralPattern = factory.updateOne(BehavioralPattern);

// @desc      Delete BehavioralPattern
// @route     DELETE /api/uba/behavioral-pattern/:id
// @access    private

exports.deleteBehavioralPattern = factory.deleteOne(BehavioralPattern);
