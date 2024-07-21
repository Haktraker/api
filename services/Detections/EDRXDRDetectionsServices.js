const EDRXDRDetections = require("../../models/Detections/EDRXDRDetections");
const factory = require("../handlersFactory");

// @desc      Create EDRXDRDetections
// @route     POST /api/detections/edrxdr-detections
// @access    private
exports.createEDRXDRDetections = factory.create(EDRXDRDetections);

// @desc      Get List Of EDRXDRDetections
// @route     GET /api/detections/edrxdr-detections
// @access    Public
exports.getEDRXDRDetections = factory.getAll(EDRXDRDetections);

// @desc      Get Specific EDRXDRDetection by id
// @route     GET /api/detections/edrxdr-detections/:id
// @access    Public
exports.getEDRXDRDetection = factory.getOne(EDRXDRDetections);

// @desc      Update EDRXDRDetection
// @route     PATCH /api/detections/edrxdr-detections/:id
// @access    private
exports.updateEDRXDRDetection = factory.updateOne(EDRXDRDetections);

// @desc      Delete EDRXDRDetection
// @route     DELETE /api/edrxdr-detections/:id
// @access    private

exports.deleteEDRXDRDetection = factory.deleteOne(EDRXDRDetections);
