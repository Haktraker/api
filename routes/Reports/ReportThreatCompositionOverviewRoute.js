const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportThreatCompositionOverview,
  getReportThreatCompositionOverviews,
  getReportThreatCompositionOverview,
  updateReportThreatCompositionOverview,
  deleteReportThreatCompositionOverview,
} = require("../../services/Reports/ReportThreatCompositionOverviewServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getReportThreatCompositionOverviews);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getReportThreatCompositionOverview);
router.route("/").post(createReportThreatCompositionOverview);
router
  .route("/:id")
  .patch(updateReportThreatCompositionOverview)
  .delete(deleteReportThreatCompositionOverview);
module.exports = router;
