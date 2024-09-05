const {
  uploadSingleFile,
} = require("../../middlewares/uploadImagesMiddleWare");

const ExecutiveVipProtection = require("../../models/Account_take_over/ExecutiveVipProtection");
const factory = require("../handlersFactory");

exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create ExecutiveVipProtection
// @route     POST /api/account-take-over/executive-vip-protection
// @access    private
exports.createExecutiveVipProtection = factory.create(ExecutiveVipProtection);

// @desc      Get Specific ExecutiveVipProtection by id
// @route     GET /api/account-take-over/executive-vip-protection/:id
// @access    Public
exports.getExecutiveVipProtection = factory.getOne(ExecutiveVipProtection);

// @desc      Get List Of ExecutiveVipProtection
// @route     GET /api/account-take-over/executive-vip-protection
// @access    Public
exports.getExecutiveVipProtections = factory.getAll(ExecutiveVipProtection);

// @desc      Update ExecutiveVipProtection
// @route     PATCH /api/account-take-over/executive-vip-protection/:id
// @access    private
exports.updateExecutiveVipProtection = factory.updateOne(
  ExecutiveVipProtection
);

// @desc      Delete ExecutiveVipProtection
// @route     DELETE /api/account-take-over/executive-vip-protection/:id
// @access    private

exports.deleteExecutiveVipProtection = factory.deleteOne(
  ExecutiveVipProtection
);
