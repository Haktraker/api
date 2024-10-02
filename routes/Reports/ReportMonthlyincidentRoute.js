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

router.route("/").get(getReportMonthlyIncidents);
router.route("/:id").get(getReportMonthlyIncident);

router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportMonthlyIncident)
  .delete(deleteReportMonthlyIncident);
router.route("/").post(createReportMonthlyIncident);
module.exports = router;
