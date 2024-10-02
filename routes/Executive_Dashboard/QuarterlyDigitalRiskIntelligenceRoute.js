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
router.route("/").get(getQuarterlyDigitalRiskIntelligences);
router.route("/:id").get(getQuarterlyDigitalRiskIntelligence);
router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateQuarterlyDigitalRiskIntelligence)
  .delete(deleteQuarterlyDigitalRiskIntelligence);
router.route("/").post(createQuarterlyDigitalRiskIntelligence);
module.exports = router;
