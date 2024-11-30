const express = require("express");
const auth = require("../../services/authServices");
const {
  createComplianceScore,
  getComplianceScores,
  getComplianceScore,
  updateComplianceScore,
  deleteComplianceScore,
} = require("../../services/SecurityBreachIndicatorsDashboard/ComplianceScoreServices");

const router = express.Router();

router.route("/").get(getComplianceScores);
router.route("/:id").get(getComplianceScore);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateComplianceScore)
  .delete(deleteComplianceScore);
router.route("/").post(createComplianceScore);
module.exports = router;
