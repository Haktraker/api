const express = require("express");
const auth = require("../../services/authServices");
const {
  createAnomalyCategoryDistribution,
  getAnomalyCategoryDistributions,
  getAnomalyCategoryDistribution,
  updateAnomalyCategoryDistribution,
  deleteAnomalyCategoryDistribution,
} = require("../../services/User_Behavior/AnomalyCategoryDistributionServices");

const router = express.Router();

router.route("/").get(getAnomalyCategoryDistributions);
router.route("/:id").get(getAnomalyCategoryDistribution);

router.use(auth.protect);
router.use(auth.allowedTo("admin"));
router
  .route("/:id")
  .patch(updateAnomalyCategoryDistribution)
  .delete(deleteAnomalyCategoryDistribution);
router.route("/").post(createAnomalyCategoryDistribution);
module.exports = router;
