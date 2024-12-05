const express = require("express");
const auth = require("../../services/authServices");
const {
  createComplianceRiskDistribution,
  getComplianceRiskDistributions,
  getComplianceRiskDistribution,
  updateComplianceRiskDistribution,
  deleteComplianceRiskDistribution,
} = require("../../services/NonComplianceGapsDashboard/ComplianceRiskDistributionServices");

const router = express.Router();

router.route("/").get(getComplianceRiskDistributions);
router.route("/:id").get(getComplianceRiskDistribution);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router.route("/:id").patch(updateComplianceRiskDistribution).delete(deleteComplianceRiskDistribution);
router.route("/").post(createComplianceRiskDistribution);
module.exports = router;
