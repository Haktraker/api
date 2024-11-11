const {
  uploadSingleFile,
} = require("../../middlewares/uploadImagesMiddleWare");
const AccountTakeover = require("../../models/Account_take_over/AccountTakeover");
const factory = require("../handlersFactory");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create Account Take Over
// @route     POST /api/account-take-over
// @access    private
exports.createAccountTakeover = factory.create(AccountTakeover);

// @desc      Get Specific AccountTakeover by id
// @route     GET /api/account-take-over/:id
// @access    Public
exports.getAccountTakeover = factory.getOne(AccountTakeover);

// @desc      Get List Of Account Take Over
// @route     GET /api/account-take-over
// @access    Public
exports.getAccountTakeovers = factory.getAll(AccountTakeover);

// @desc      Update Account Take Over
// @route     PATCH /api/account-take-over/:id
// @access    private
exports.updateAccountTakeover = factory.updateOne(AccountTakeover);

// @desc      Delete Account Take Over
// @route     DELETE /api/account-take-over/:id
// @access    private

exports.deleteAccountTakeover = factory.deleteOne(AccountTakeover);
