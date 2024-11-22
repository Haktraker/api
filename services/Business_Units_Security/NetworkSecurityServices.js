const NetworkSecurity = require("../../models/Business_Units_Security/NetworkSecurity");
const factory = require("../handlersFactory");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create NetworkSecurity
// @route     POST /api/bu-security/network-security
// @access    private
exports.createNetworkSecurity = factory.create(NetworkSecurity);

// @desc      Get Specific NetworkSecurity by id
// @route     GET /api/bu-security/network-security/:id
// @access    Public
exports.getNetworkSecurity = factory.getOne(NetworkSecurity);

// @desc      Get List Of NetworkSecurity
// @route     GET /api/bu-security/network-security
// @access    Public
exports.getNetworkSecuritys = factory.getAll(NetworkSecurity);

// @desc      Update NetworkSecurity
// @route     PATCH /api/bu-security/network-security/:id
// @access    private
exports.updateNetworkSecurity = factory.updateOne(NetworkSecurity);

// @desc      Delete NetworkSecurity
// @route     DELETE /api/bu-security/network-security/:id
// @access    private

exports.deleteNetworkSecurity = factory.deleteOne(NetworkSecurity);
