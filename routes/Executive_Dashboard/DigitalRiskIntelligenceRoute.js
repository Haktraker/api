const express = require("express");
const auth = require("../../services/authServices");
const {
  createDigitalRiskIntelligence,
  getDigitalRiskIntelligences,
  getDigitalRiskIntelligence,
  updateDigitalRiskIntelligence,
  deleteDigitalRiskIntelligence,
} = require("../../services/Executive_Dashboard/DigitalRiskIntelligenceServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getDigitalRiskIntelligences);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getDigitalRiskIntelligence);
router.route("/").post(createDigitalRiskIntelligence);
router
  .route("/:id")
  .patch(updateDigitalRiskIntelligence)
  .delete(deleteDigitalRiskIntelligence);
module.exports = router;
