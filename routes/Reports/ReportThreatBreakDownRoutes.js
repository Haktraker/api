const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportThreatBreakDown,
  getReportThreatBreakDowns,
  getReportThreatBreakDown,
  updateReportThreatBreakDown,
  deleteReportThreatBreakDown,
} = require("../../services/Reports/ReportThreatBreakDownServices");

const router = express.Router();

router.use(auth.protect);

router.route("/").get(getReportThreatBreakDowns);
router.route("/:id").get(getReportThreatBreakDown);

router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportThreatBreakDown)
  .delete(deleteReportThreatBreakDown);
router.route("/").post(createReportThreatBreakDown);
module.exports = router;
