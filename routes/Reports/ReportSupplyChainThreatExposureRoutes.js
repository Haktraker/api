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

router.route("/:id").get(getReportSupplyChainThreatExposure);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(updateReportSupplyChainThreatExposure)
  .delete(deleteReportSupplyChainThreatExposure);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createReportSupplyChainThreatExposure);
module.exports = router;
