const express = require("express");
const auth = require("../../services/authServices");
const {
  createRiskScoreDistribution,
  getRiskScoreDistributions,
  getRiskScoreDistribution,
  updateRiskScoreDistribution,
  deleteRiskScoreDistribution,
} = require("../../services/User_Behavior/RiskScoreDistributionServices");

const router = express.Router();

router.route("/").get(getRiskScoreDistributions);
router.route("/:id").get(getRiskScoreDistribution);

router.use(auth.protect);
router.use(auth.allowedTo("admin"));
router
  .route("/:id")
  .patch(updateRiskScoreDistribution)
  .delete(deleteRiskScoreDistribution);
router.route("/").post(createRiskScoreDistribution);
module.exports = router;
