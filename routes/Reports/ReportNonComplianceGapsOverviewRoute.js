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

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getReportNonComplianceGapsOverviews);

router.use(auth.allowedTo("admin"));
router.route("/:id").get(getReportNonComplianceGapsOverview);
router.route("/").post(createReportNonComplianceGapsOverview);
router
  .route("/:id")
  .patch(updateReportNonComplianceGapsOverview)
  .delete(deleteReportNonComplianceGapsOverview);
module.exports = router;
