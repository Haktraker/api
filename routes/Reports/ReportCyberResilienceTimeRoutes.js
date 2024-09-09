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

router.route("/:id").get(getReportCyberResilienceTime);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(updateReportCyberResilienceTime)
  .delete(deleteReportCyberResilienceTime);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createReportCyberResilienceTime);
module.exports = router;
