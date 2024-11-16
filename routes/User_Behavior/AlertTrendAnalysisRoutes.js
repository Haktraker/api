const express = require("express");
const auth = require("../../services/authServices");
const {
  createAlertTrendAnalysis,
  getAlertTrendAnalysiss,
  getAlertTrendAnalysis,
  updateAlertTrendAnalysis,
  deleteAlertTrendAnalysis,
} = require("../../services/User_Behavior/AlertTrendAnalysisServices");

const router = express.Router();

router.route("/").get(getAlertTrendAnalysiss);
router.route("/:id").get(getAlertTrendAnalysis);

router.use(auth.protect);
router.use(auth.allowedTo("admin"));
router
  .route("/:id")
  .patch(updateAlertTrendAnalysis)
  .delete(deleteAlertTrendAnalysis);
router.route("/").post(createAlertTrendAnalysis);
module.exports = router;
