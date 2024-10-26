const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportIncidentResponseMetric,
  getReportIncidentResponseMetric,
  getReportIncidentResponseMetrics,
  updateReportIncidentResponseMetric,
  deleteReportIncidentResponseMetric,
} = require("../../services/Reports/ReportIncidentResponseMetricsServices");

const router = express.Router();

router.use(auth.protect);

router.route("/").get(getReportIncidentResponseMetrics);
router.route("/:id").get(getReportIncidentResponseMetric);

router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportIncidentResponseMetric)
  .delete(deleteReportIncidentResponseMetric);
router.route("/").post(createReportIncidentResponseMetric);
module.exports = router;
