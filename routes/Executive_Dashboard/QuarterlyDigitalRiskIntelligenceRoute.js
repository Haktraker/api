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

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getQuarterlyDigitalRiskIntelligence);
router.route("/").post(createQuarterlyDigitalRiskIntelligence);
router
  .route("/:id")
  .patch(updateQuarterlyDigitalRiskIntelligence)
  .delete(deleteQuarterlyDigitalRiskIntelligence);
module.exports = router;
