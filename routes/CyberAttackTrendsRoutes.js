const express = require("express");
const auth = require("../services/authServices");
const {
  createCyberAttackTrends,
  getCyberAttackTrend,
  getCyberAttackTrends,
  updateCyberAttackTrends,
  deleteCyberAttackTrends,
} = require("../services/CyberAttackTrendsServices");

const router = express.Router();
router.use(auth.protect);

router.route("/").get(getCyberAttackTrends);
router.route("/:id").get(getCyberAttackTrend);
router.use(auth.allowedTo("admin"));
router
  .route("/:id")
  .patch(updateCyberAttackTrends)
  .delete(deleteCyberAttackTrends);
router.route("/").post(createCyberAttackTrends);
module.exports = router;
