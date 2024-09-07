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

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getQuarterlyCyberAttackTrends);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getQuarterlyCyberAttackTrend);
router.route("/").post(createQuarterlyCyberAttackTrends);
router
  .route("/:id")
  .patch(updateQuarterlyCyberAttackTrends)
  .delete(deleteQuarterlyCyberAttackTrends);
module.exports = router;
