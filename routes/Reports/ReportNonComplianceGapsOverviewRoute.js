const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportNonComplianceGapsOverview,
  getReportNonComplianceGapsOverviews,
  getReportNonComplianceGapsOverview,
  updateReportNonComplianceGapsOverview,
  deleteReportNonComplianceGapsOverview,
} = require("../../services/Reports/ReportNonComplianceGapsOverviewServices");

const router = express.Router();
router.use(auth.protect);
router.route("/").get(getReportNonComplianceGapsOverviews);
router.route("/:id").get(getReportNonComplianceGapsOverview);
router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportNonComplianceGapsOverview)
  .delete(deleteReportNonComplianceGapsOverview);
router.route("/").post(createReportNonComplianceGapsOverview);
module.exports = router;
