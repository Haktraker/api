const UserBehaviorAnalytics = require("../../models/User_Behavior/UserBehaviorAnalytics");
const factory = require("../handlersFactory");
// const { uploadSingleFile } = require("../middlewares/uploadImagesMiddleWare");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create UserBehaviorAnalytics
// @route     POST /api/uba/analytics
// @access    private
exports.createUserBehaviorAnalytic = factory.create(UserBehaviorAnalytics);

// @desc      Get Specific UserBehaviorAnalytics by id
// @route     GET /api/uba/analytics/:id
// @access    Public
exports.getUserBehaviorAnalytic = factory.getOne(UserBehaviorAnalytics);

// @desc      Get List Of UserBehaviorAnalytics
// @route     GET /api/uba/analytics
// @access    Public
exports.getUserBehaviorAnalytics = factory.getAll(UserBehaviorAnalytics);

// @desc      Update UserBehaviorAnalytics
// @route     PATCH /api/uba/analytics/:id
// @access    private
exports.updateUserBehaviorAnalytic = factory.updateOne(UserBehaviorAnalytics);

// @desc      Delete UserBehaviorAnalytics
// @route     DELETE /api/uba/analytics/:id
// @access    private

exports.deleteUserBehaviorAnalytic = factory.deleteOne(UserBehaviorAnalytics);
