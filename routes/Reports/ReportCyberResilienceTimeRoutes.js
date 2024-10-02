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

router.route("/").get(getReportCyberResilienceTimes);
router.route("/:id").get(getReportCyberResilienceTime);

router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportCyberResilienceTime)
  .delete(deleteReportCyberResilienceTime);
router.route("/").post(createReportCyberResilienceTime);
module.exports = router;
