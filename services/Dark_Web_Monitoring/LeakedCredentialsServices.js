const leakedCredentials = require("../../models/Dark_Web_Monitoring/LeakedCredentials");
const factory = require("../handlersFactory");

// @desc      Create leakedCredentials
// @route     POST /api/dark-web-monitoring/leakedCredentials
// @access    private
exports.createleakedCredentials = factory.create(leakedCredentials);

// @desc      Get Specific leakedCredentials by id
// @route     GET /api/dark-web-monitoring/leakedCredentials/:id
// @access    Public
exports.getleakedCredential = factory.getOne(leakedCredentials);

// @desc      Get List Of leakedCredentials
// @route     GET /api/dark-web-monitoring/leakedCredentials
// @access    Public
exports.getleakedCredentials = factory.getAll(leakedCredentials);

// @desc      Update leakedCredentials
// @route     PATCH /api/dark-web-monitoring/leakedCredentials/:id
// @access    private
exports.updateleakedCredential = factory.updateOne(leakedCredentials);

// @desc      Delete leakedCredentials
// @route     DELETE /api/dark-web-monitoring/leakedCredentials/:id
// @access    private

exports.deleteleakedCredential = factory.deleteOne(leakedCredentials);
