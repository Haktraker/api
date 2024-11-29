const express = require("express");
const auth = require("../../services/authServices");
const {
  createThreatDetections,
  getThreatDetections,
  getThreatDetection,
  updateThreatDetection,
  deleteThreatDetection,
} = require("../../services/Detections/ThreatDetectionsServices");

const router = express.Router();
router.route("/").get(getThreatDetections);
router.route("/:id").get( getThreatDetection);
router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch( updateThreatDetection)
  .delete( deleteThreatDetection);
router
  .route("/")
  .post( createThreatDetections);
module.exports = router;
