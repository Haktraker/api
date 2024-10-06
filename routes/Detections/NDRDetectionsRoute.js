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
router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateNDRDetectionValidator, updateNDRDetection)
  .delete(deleteNDRDetectionValidator, deleteNDRDetection);
router.route("/").post(createNDRDetectionssValidator, createNDRDetections);
module.exports = router;
