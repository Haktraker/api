const express = require("express");
const auth = require("../../services/authServices");
const {
  createSupplyChainThreatExposure,
  getSupplyChainThreatExposure,
  getSupplyChainThreatExposures,
  updateSupplyChainThreatExposure,
  deleteSupplyChainThreatExposure,
} = require("../../services/Executive_Dashboard/SupplyChainThreatExposureServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getSupplyChainThreatExposures);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getSupplyChainThreatExposure);
router.route("/").post(createSupplyChainThreatExposure);
router
  .route("/:id")
  .patch(updateSupplyChainThreatExposure)
  .delete(deleteSupplyChainThreatExposure);
module.exports = router;
