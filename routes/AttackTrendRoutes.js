const express = require("express");
const auth = require("../services/authServices");
const {
  createAttackTrend,
  getAttackTrend,
  getAttackTrends,
  updateAttackTrend,
  deleteAttackTrend,
} = require("../services/AttackTrendServices");

const router = express.Router();

router.route("/").get(getAttackTrends);
router.route("/:id").get(getAttackTrend);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router.route("/:id").patch(updateAttackTrend).delete(deleteAttackTrend);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createAttackTrend);
module.exports = router;
