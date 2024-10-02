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

router.route("/").get(getQuarterlySupplyChainThreatExposures);
router.route("/:id").get(getQuarterlySupplyChainThreatExposure);

router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateQuarterlySupplyChainThreatExposure)
  .delete(deleteQuarterlySupplyChainThreatExposure);
router.route("/").post(createQuarterlySupplyChainThreatExposure);
module.exports = router;
