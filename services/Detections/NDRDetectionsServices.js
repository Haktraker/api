const NDRDetections = require("../../models/Detections/NDRDetections");
const factory = require("../handlersFactory");

// @desc      Create NDRDetections
// @route     POST /api/detections/ndr-detections
// @access    private
exports.createNDRDetections = factory.create(NDRDetections);

// @desc      Get List Of NDRDetections
// @route     GET /api/detections/ndr-detections
// @access    Public
exports.getNDRDetections = factory.getAll(NDRDetections);

// @desc      Get Specific NDRDetection by id
// @route     GET /api/detections/ndr-detections/:id
// @access    Public
exports.getNDRDetection = factory.getOne(NDRDetections);

// @desc      Update NDRDetection
// @route     PATCH /api/detections/ndr-detections/:id
// @access    private
exports.updateNDRDetection = factory.updateOne(NDRDetections);

// @desc      Delete NDRDetection
// @route     DELETE /api/ndr-detections/:id
// @access    private

exports.deleteNDRDetection = factory.deleteOne(NDRDetections);
