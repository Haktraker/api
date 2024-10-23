const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportThreatImpactOverView,
  getReportThreatImpactOverViews,
  getReportThreatImpactOverView,
  updateReportThreatImpactOverView,
  deleteReportThreatImpactOverView,
} = require("../../services/Reports/ReportThreatImpactOverViewServices");

const router = express.Router();

router.use(auth.protect);
router.route("/").get(getReportThreatImpactOverViews);

router.route("/:id").get(getReportThreatImpactOverView);

router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportThreatImpactOverView)
  .delete(deleteReportThreatImpactOverView);
router.route("/").post(createReportThreatImpactOverView);
module.exports = router;
