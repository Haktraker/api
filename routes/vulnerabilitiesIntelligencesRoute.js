const express = require("express");
const auth = require("../services/authServices");
const {
  createVulnerabilitiesIntelligence,
  getVulnerabilitiesIntelligences,
  getVulnerabilitiesIntelligence,
  updateVulnerabilitiesIntelligence,
  deleteVulnerabilitiesIntelligence,
} = require("../services/vulnerabilitiesIntelligenceServices");
const {
  getVulnerabilitiesIntelligenceValidator,
  createVulnerabilitiesIntelligencesValidator,
  updateVulnerabilitiesIntelligenceValidator,
  deleteVulnerabilitiesIntelligenceValidator,
} = require("../utils/validators/vulnerabilitiesIntelligenceValidators");

const router = express.Router();

router.route("/").get(getVulnerabilitiesIntelligences);
router
  .route("/:id")
  .get(getVulnerabilitiesIntelligenceValidator, getVulnerabilitiesIntelligence);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(
    updateVulnerabilitiesIntelligenceValidator,
    updateVulnerabilitiesIntelligence
  )
  .delete(
    deleteVulnerabilitiesIntelligenceValidator,
    deleteVulnerabilitiesIntelligence
  );
router.use(auth.protect, auth.allowedTo("admin"));
router
  .route("/")
  .post(
    createVulnerabilitiesIntelligencesValidator,
    createVulnerabilitiesIntelligence
  );
module.exports = router;
