const express = require("express");
const auth = require("../../services/authServices");
const {
  createNDRDetections,
  getNDRDetections,
  getNDRDetection,
  updateNDRDetection,
  deleteNDRDetection,
} = require("../../services/Detections/NDRDetectionsServices");
const {
  getNDRDetectionValidator,
  createNDRDetectionssValidator,
  updateNDRDetectionValidator,
  deleteNDRDetectionValidator,
} = require("../../utils/validators/Detections/NDRDetectionsValidators");

const router = express.Router();

router.route("/").get(getNDRDetections);
router.route("/:id").get(getNDRDetectionValidator, getNDRDetection);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createNDRDetectionssValidator, createNDRDetections);
router
  .route("/:id")
  .patch(updateNDRDetectionValidator, updateNDRDetection)
  .delete(deleteNDRDetectionValidator, deleteNDRDetection);
module.exports = router;
