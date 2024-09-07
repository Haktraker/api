const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyAttackTrend,
  getQuarterlyAttackTrends,
  getQuarterlyAttackTrend,
  updateQuarterlyAttackTrend,
  deleteQuarterlyAttackTrend,
} = require("../../services/Executive_Dashboard/QuarterlyAttackTrendServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getQuarterlyAttackTrends);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getQuarterlyAttackTrend);
router.route("/").post(createQuarterlyAttackTrend);
router
  .route("/:id")
  .patch(updateQuarterlyAttackTrend)
  .delete(deleteQuarterlyAttackTrend);
module.exports = router;
