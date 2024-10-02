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

router.route("/").get(getReportThreatCompositionOverviews);

router.route("/:id").get(getReportThreatCompositionOverview);
router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportThreatCompositionOverview)
  .delete(deleteReportThreatCompositionOverview);
router.route("/").post(createReportThreatCompositionOverview);
module.exports = router;
