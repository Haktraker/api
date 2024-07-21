const AccountTakeover = require("../models/AccountTakeover");
const factory = require("./handlersFactory");

// @desc      Create AccountTakeover
// @route     POST /api/account-takeover
// @access    private
exports.createAccountTakeover = factory.create(AccountTakeover);

// @desc      Get Specific AccountTakeover by id
// @route     GET /api/account-takeover/:id
// @access    Public
exports.getAccountTakeover = factory.getOne(AccountTakeover);

// @desc      Get List Of AccountTakeover
// @route     GET /api/account-takeover
// @access    Public
exports.getAccountTakeovers = factory.getAll(AccountTakeover);

// @desc      Update AccountTakeover
// @route     PATCH /api/account-takeover/:id
// @access    private
exports.updateAccountTakeover = factory.updateOne(AccountTakeover);

// @desc      Delete AccountTakeover
// @route     DELETE /api/account-takeover/:id
// @access    private

exports.deleteAccountTakeover = factory.deleteOne(AccountTakeover);
