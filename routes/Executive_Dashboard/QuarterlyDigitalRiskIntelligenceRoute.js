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

router.route("/").get(getQuarterlyDigitalRiskIntelligences);
router.route("/:id").get(getQuarterlyDigitalRiskIntelligence);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateQuarterlyDigitalRiskIntelligence)
  .delete(deleteQuarterlyDigitalRiskIntelligence);
router.route("/").post(createQuarterlyDigitalRiskIntelligence);
module.exports = router;
