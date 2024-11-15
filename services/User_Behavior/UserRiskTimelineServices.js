const UserRiskTimeline = require("../../models/User_Behavior/UserRiskTimeline");
const factory = require("../handlersFactory");
// const { uploadSingleFile } = require("../middlewares/uploadImagesMiddleWare");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create UserRiskTimeline
// @route     POST /api/uba/user-risk-timeline
// @access    private
exports.createUserRiskTimeline = factory.create(UserRiskTimeline);

// @desc      Get Specific UserRiskTimeline by id
// @route     GET /api/uba/user-risk-timeline/:id
// @access    Public
exports.getUserRiskTimeline = factory.getOne(UserRiskTimeline);

// @desc      Get List Of UserRiskTimeline
// @route     GET /api/uba/user-risk-timeline
// @access    Public
exports.getUserRiskTimelines = factory.getAll(UserRiskTimeline);

// @desc      Update UserRiskTimeline
// @route     PATCH /api/uba/user-risk-timeline/:id
// @access    private
exports.updateUserRiskTimeline = factory.updateOne(UserRiskTimeline);

// @desc      Delete UserRiskTimeline
// @route     DELETE /api/uba/user-risk-timeline/:id
// @access    private

exports.deleteUserRiskTimeline = factory.deleteOne(UserRiskTimeline);
