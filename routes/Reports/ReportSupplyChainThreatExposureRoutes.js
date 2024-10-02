const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportSupplyChainThreatExposure,
  getReportSupplyChainThreatExposure,
  getReportSupplyChainThreatExposures,
  updateReportSupplyChainThreatExposure,
  deleteReportSupplyChainThreatExposure,
} = require("../../services/Reports/ReportSupplyChainThreatExposureServices");

const router = express.Router();

router.use(auth.protect);

router.route("/").get(getReportSupplyChainThreatExposures);

router.route("/:id").get(getReportSupplyChainThreatExposure);
router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportSupplyChainThreatExposure)
  .delete(deleteReportSupplyChainThreatExposure);
router.route("/").post(createReportSupplyChainThreatExposure);
module.exports = router;
