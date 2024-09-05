const {
  uploadSingleFile,
} = require("../../middlewares/uploadImagesMiddleWare");

const Impersonation = require("../../models/Account_take_over/Impersonation");
const factory = require("../handlersFactory");

exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create Impersonation
// @route     POST /api/account-take-over/impersonation
// @access    private
exports.createImpersonation = factory.create(Impersonation);

// @desc      Get Specific Impersonation by id
// @route     GET /api/account-take-over/impersonation/:id
// @access    Public
exports.getImpersonation = factory.getOne(Impersonation);

// @desc      Get List Of Impersonation
// @route     GET /api/account-take-over/impersonation
// @access    Public
exports.getImpersonations = factory.getAll(Impersonation);

// @desc      Update Impersonation
// @route     PATCH /api/account-take-over/impersonation/:id
// @access    private
exports.updateImpersonation = factory.updateOne(Impersonation);

// @desc      Delete Impersonation
// @route     DELETE /api/account-take-over/impersonation/:id
// @access    private

exports.deleteImpersonation = factory.deleteOne(Impersonation);
