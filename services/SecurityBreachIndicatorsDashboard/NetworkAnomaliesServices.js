const NetworkAnomalies = require("../../models/SecurityBreachIndicatorsDashboard/NetworkAnomalies");
const factory = require("../handlersFactory");

// @desc      Create Cyber Resilience Time
// @route     POST /api/security-breach-indicators-dashboard/network-anomalies
// @access    private
exports.createNetworkAnomalies = factory.create(NetworkAnomalies);

// @desc      Get Specific Cyber Resilience Time by id
// @route     GET /api/security-breach-indicators-dashboard/network-anomalies/:id
// @access    Public
exports.getNetworkAnomalies = factory.getOne(NetworkAnomalies);

// @desc      Get List Of Cyber Resilience Time
// @route     GET /api/security-breach-indicators-dashboard/network-anomalies
// @access    Public
exports.getNetworkAnomaliess = factory.getAll(NetworkAnomalies);

// @desc      Update Cyber Resilience Time
// @route     PATCH /api/security-breach-indicators-dashboard/network-anomalies/:id
// @access    private
exports.updateNetworkAnomalies = factory.updateOne(NetworkAnomalies);

// @desc      Delete Cyber Resilience Time
// @route     DELETE /api/security-breach-indicators-dashboard/network-anomalies/:id
// @access    private

exports.deleteNetworkAnomalies = factory.deleteOne(NetworkAnomalies);
