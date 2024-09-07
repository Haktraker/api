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

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getReportSupplyChainThreatExposures);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getReportSupplyChainThreatExposure);
router.route("/").post(createReportSupplyChainThreatExposure);
router
  .route("/:id")
  .patch(updateReportSupplyChainThreatExposure)
  .delete(deleteReportSupplyChainThreatExposure);
module.exports = router;
