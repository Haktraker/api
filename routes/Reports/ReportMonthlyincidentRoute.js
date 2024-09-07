const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportMonthlyIncident,
  getReportMonthlyIncidents,
  getReportMonthlyIncident,
  updateReportMonthlyIncident,
  deleteReportMonthlyIncident,
} = require("../../services/Reports/ReportMonthlyincidentServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));

router.route("/").get(getReportMonthlyIncidents);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getReportMonthlyIncident);

router.route("/").post(createReportMonthlyIncident);
router
  .route("/:id")
  .patch(updateReportMonthlyIncident)
  .delete(deleteReportMonthlyIncident);
module.exports = router;
