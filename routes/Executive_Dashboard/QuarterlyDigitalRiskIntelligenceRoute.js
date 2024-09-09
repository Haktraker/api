const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyDigitalRiskIntelligence,
  getQuarterlyDigitalRiskIntelligences,
  getQuarterlyDigitalRiskIntelligence,
  updateQuarterlyDigitalRiskIntelligence,
  deleteQuarterlyDigitalRiskIntelligence,
} = require("../../services/Executive_Dashboard/QuarterlyDigitalRiskIntelligenceServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getQuarterlyDigitalRiskIntelligences);

router.route("/:id").get(getQuarterlyDigitalRiskIntelligence);
router.use(auth.protect, auth.allowedTo("admin", "user"));

router
  .route("/:id")
  .patch(updateQuarterlyDigitalRiskIntelligence)
  .delete(deleteQuarterlyDigitalRiskIntelligence);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createQuarterlyDigitalRiskIntelligence);
module.exports = router;
