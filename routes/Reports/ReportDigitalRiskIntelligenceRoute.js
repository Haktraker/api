const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportDigitalRiskIntelligence,
  getReportDigitalRiskIntelligences,
  getReportDigitalRiskIntelligence,
  updateReportDigitalRiskIntelligence,
  deleteReportDigitalRiskIntelligence,
} = require("../../services/Reports/ReportDigitalRiskIntelligenceServices");

const router = express.Router();

router.use(auth.protect);

router.route("/").get(getReportDigitalRiskIntelligences);
router.route("/:id").get(getReportDigitalRiskIntelligence);

router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportDigitalRiskIntelligence)
  .delete(deleteReportDigitalRiskIntelligence);
router.route("/").post(createReportDigitalRiskIntelligence);
module.exports = router;
