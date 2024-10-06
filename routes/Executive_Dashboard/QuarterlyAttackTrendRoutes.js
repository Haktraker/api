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

router.route("/").get(getQuarterlyAttackTrends);
router.route("/:id").get(getQuarterlyAttackTrend);
router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));

router
  .route("/:id")
  .patch(updateQuarterlyAttackTrend)
  .delete(deleteQuarterlyAttackTrend);
router.route("/").post(createQuarterlyAttackTrend);
module.exports = router;
