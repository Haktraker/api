const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlySupplyChainThreatExposure,
  getQuarterlySupplyChainThreatExposure,
  getQuarterlySupplyChainThreatExposures,
  updateQuarterlySupplyChainThreatExposure,
  deleteQuarterlySupplyChainThreatExposure,
} = require("../../services/Executive_Dashboard/QuarterlySupplyChainThreatExposureServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getQuarterlySupplyChainThreatExposures);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getQuarterlySupplyChainThreatExposure);
router.route("/").post(createQuarterlySupplyChainThreatExposure);
router
  .route("/:id")
  .patch(updateQuarterlySupplyChainThreatExposure)
  .delete(deleteQuarterlySupplyChainThreatExposure);
module.exports = router;
