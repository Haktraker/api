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

router.route("/").get(getCyberAttackTrends);
router.route("/:id").get(getCyberAttackTrend);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createCyberAttackTrends);
router
  .route("/:id")
  .patch(updateCyberAttackTrends)
  .delete(deleteCyberAttackTrends);
module.exports = router;
