const ip = require("../../models/assets/IPs");
const factory = require("../handlersFactory");

// @desc      Create ip
// @route     POST /api/assets/ips
// @access    private
exports.createip = factory.create(ip);

// @desc      Get Specific ip by id
// @route     GET /api/assets/ips/:id
// @access    Public
exports.getip = factory.getOne(ip);

// @desc      Get List Of ips
// @route     GET /api/assets/ips
// @access    Public
exports.getips = factory.getAll(ip);

// @desc      Update ip
// @route     PATCH /api/assets/ips/:id
// @access    private
exports.updateip = factory.updateOne(ip);

// @desc      Delete ip
// @route     DELETE /api/assets/ips/:id
// @access    private

exports.deleteip = factory.deleteOne(ip);
