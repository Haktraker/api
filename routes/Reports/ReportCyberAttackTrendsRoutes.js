const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportCyberAttackTrends,
  getReportCyberAttackTrend,
  getReportCyberAttackTrends,
  updateReportCyberAttackTrends,
  deleteReportCyberAttackTrends,
} = require("../../services/Reports/ReportCyberAttackTrendsServices");

const router = express.Router();
router.use(auth.protect);

router.route("/").get(getReportCyberAttackTrends);
router.route("/:id").get(getReportCyberAttackTrend);
router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportCyberAttackTrends)
  .delete(deleteReportCyberAttackTrends);
router.route("/").post(createReportCyberAttackTrends);
module.exports = router;
