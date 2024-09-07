const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportCyberResilienceTime,
  getReportCyberResilienceTimes,
  getReportCyberResilienceTime,
  updateReportCyberResilienceTime,
  deleteReportCyberResilienceTime,
} = require("../../services/Reports/ReportCyberResilienceTimeServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getReportCyberResilienceTimes);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getReportCyberResilienceTime);
router.route("/").post(createReportCyberResilienceTime);
router
  .route("/:id")
  .patch(updateReportCyberResilienceTime)
  .delete(deleteReportCyberResilienceTime);
module.exports = router;
