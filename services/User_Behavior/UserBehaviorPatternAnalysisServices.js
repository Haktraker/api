const UserBehaviorPatternAnalysis = require("../../models/User_Behavior/UserBehaviorPatternAnalysis");
const factory = require("../handlersFactory");
// const { uploadSingleFile } = require("../middlewares/uploadImagesMiddleWare");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create UserBehaviorPatternAnalysis
// @route     POST /api/uba/user-behavior-pattern-analysis
// @access    private
exports.createUserBehaviorPatternAnalysis = factory.create(
  UserBehaviorPatternAnalysis
);

// @desc      Get Specific UserBehaviorPatternAnalysis by id
// @route     GET /api/uba/user-behavior-pattern-analysis/:id
// @access    Public
exports.getUserBehaviorPatternAnalysis = factory.getOne(
  UserBehaviorPatternAnalysis
);

// @desc      Get List Of UserBehaviorPatternAnalysis
// @route     GET /api/uba/user-behavior-pattern-analysis
// @access    Public
exports.getUserBehaviorPatternAnalysiss = factory.getAll(
  UserBehaviorPatternAnalysis
);

// @desc      Update UserBehaviorPatternAnalysis
// @route     PATCH /api/uba/user-behavior-pattern-analysis/:id
// @access    private
exports.updateUserBehaviorPatternAnalysis = factory.updateOne(
  UserBehaviorPatternAnalysis
);

// @desc      Delete UserBehaviorPatternAnalysis
// @route     DELETE /api/uba/user-behavior-pattern-analysis/:id
// @access    private

exports.deleteUserBehaviorPatternAnalysis = factory.deleteOne(
  UserBehaviorPatternAnalysis
);
