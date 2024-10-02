const express = require("express");
const auth = require("../../services/authServices");
const {
  createEDRXDRDetections,
  getEDRXDRDetections,
  getEDRXDRDetection,
  updateEDRXDRDetection,
  deleteEDRXDRDetection,
} = require("../../services/Detections/EDRXDRDetectionsServices");
const {
  getEDRXDRDetectionValidator,
  createEDRXDRDetectionssValidator,
  updateEDRXDRDetectionValidator,
  deleteEDRXDRDetectionValidator,
} = require("../../utils/validators/Detections/EDRXDRDetectionsValidators");

const router = express.Router();
router.use(auth.protect);
router.route("/").get(getEDRXDRDetections);
router.route("/:id").get(getEDRXDRDetectionValidator, getEDRXDRDetection);

router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateEDRXDRDetectionValidator, updateEDRXDRDetection)
  .delete(deleteEDRXDRDetectionValidator, deleteEDRXDRDetection);
router
  .route("/")
  .post(createEDRXDRDetectionssValidator, createEDRXDRDetections);
module.exports = router;
