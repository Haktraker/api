const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyCyberAttackTrends,
  getQuarterlyCyberAttackTrends,
  getQuarterlyCyberAttackTrend,
  updateQuarterlyCyberAttackTrends,
  deleteQuarterlyCyberAttackTrends,
} = require("../../services/Executive_Dashboard/QuarterlyCyberAttackTrendsServices");

const router = express.Router();

router.route("/").get(getQuarterlyCyberAttackTrends);
router.route("/:id").get(getQuarterlyCyberAttackTrend);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateQuarterlyCyberAttackTrends)
  .delete(deleteQuarterlyCyberAttackTrends);
router.route("/").post(createQuarterlyCyberAttackTrends);
module.exports = router;
