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

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getReportDigitalRiskIntelligences);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getReportDigitalRiskIntelligence);
router.route("/").post(createReportDigitalRiskIntelligence);
router
  .route("/:id")
  .patch(updateReportDigitalRiskIntelligence)
  .delete(deleteReportDigitalRiskIntelligence);
module.exports = router;
