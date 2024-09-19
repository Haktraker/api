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

router.use(auth.allowedTo("admin", "user", "soc", "executive"));

router.route("/").get(getReportCyberAttackTrends);
router.route("/:id").get(getReportCyberAttackTrend);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(updateReportCyberAttackTrends)
  .delete(deleteReportCyberAttackTrends);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createReportCyberAttackTrends);
module.exports = router;
