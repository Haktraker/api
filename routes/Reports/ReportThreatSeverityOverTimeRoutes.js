const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportThreatSeverityOverTime,
  getReportThreatSeverityOverTimes,
  getReportThreatSeverityOverTime,
  updateReportThreatSeverityOverTime,
  deleteReportThreatSeverityOverTime,
} = require("../../services/Reports/ReportThreatSeverityOverTimeServices");

const router = express.Router();

router.use(auth.protect);

router.route("/").get(getReportThreatSeverityOverTimes);
router.route("/:id").get(getReportThreatSeverityOverTime);

router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportThreatSeverityOverTime)
  .delete(deleteReportThreatSeverityOverTime);
router.route("/").post(createReportThreatSeverityOverTime);
module.exports = router;
