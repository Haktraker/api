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

router.route("/").get(getReportCyberAttackTrends);
router.route("/:id").get(getReportCyberAttackTrend);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createReportCyberAttackTrends);
router
  .route("/:id")
  .patch(updateReportCyberAttackTrends)
  .delete(deleteReportCyberAttackTrends);
module.exports = router;
