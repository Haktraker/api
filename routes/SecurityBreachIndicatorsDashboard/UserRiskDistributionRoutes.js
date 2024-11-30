const express = require("express");
const auth = require("../../services/authServices");
const {
  createUserRiskDistribution,
  getUserRiskDistributions,
  getUserRiskDistribution,
  updateUserRiskDistribution,
  deleteUserRiskDistribution,
} = require("../../services/SecurityBreachIndicatorsDashboard/UserRiskDistributionServices");

const router = express.Router();

router.route("/").get(getUserRiskDistributions);
router.route("/:id").get(getUserRiskDistribution);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateUserRiskDistribution)
  .delete(deleteUserRiskDistribution);
router.route("/").post(createUserRiskDistribution);
module.exports = router;
