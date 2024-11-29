const ThreatDetections = require("../../models/Detections/ThreatDetections");
const factory = require("../handlersFactory");

// @desc      Create ThreatDetections
// @route     POST /api/detections/threat-detections
// @access    private
exports.createThreatDetections = factory.create(ThreatDetections);

// @desc      Get List Of ThreatDetections
// @route     GET /api/detections/threat-detections
// @access    Public
exports.getThreatDetections = factory.getAll(ThreatDetections);

// @desc      Get Specific ThreatDetection by id
// @route     GET /api/detections/threat-detections/:id
// @access    Public
exports.getThreatDetection = factory.getOne(ThreatDetections);

// @desc      Update ThreatDetection
// @route     PATCH /api/detections/threat-detections/:id
// @access    private
exports.updateThreatDetection = factory.updateOne(ThreatDetections);

// @desc      Delete ThreatDetection
// @route     DELETE /api/threat-detections/:id
// @access    private

exports.deleteThreatDetection = factory.deleteOne(ThreatDetections);
