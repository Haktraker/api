const HighRiskUsers = require("../../models/User_Behavior/HighRiskUsers");
const factory = require("../handlersFactory");
// const { uploadSingleFile } = require("../middlewares/uploadImagesMiddleWare");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create HighRiskUsers
// @route     POST /api/uba/high-risk-users
// @access    private
exports.createHighRiskUser = factory.create(HighRiskUsers);

// @desc      Get Specific HighRiskUsers by id
// @route     GET /api/uba/high-risk-users/:id
// @access    Public
exports.getHighRiskUser = factory.getOne(HighRiskUsers);

// @desc      Get List Of HighRiskUsers
// @route     GET /api/uba/high-risk-users
// @access    Public
exports.getHighRiskUsers = factory.getAll(HighRiskUsers);

// @desc      Update HighRiskUsers
// @route     PATCH /api/uba/high-risk-users/:id
// @access    private
exports.updateHighRiskUser = factory.updateOne(HighRiskUsers);

// @desc      Delete HighRiskUsers
// @route     DELETE /api/uba/high-risk-users/:id
// @access    private

exports.deleteHighRiskUser = factory.deleteOne(HighRiskUsers);
