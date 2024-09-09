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

router.route("/:id").get(getReportNonComplianceGapsOverview);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(updateReportNonComplianceGapsOverview)
  .delete(deleteReportNonComplianceGapsOverview);
router.use(auth.allowedTo("admin"));
router.route("/").post(createReportNonComplianceGapsOverview);
module.exports = router;
