const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportAttackTrend,
  getReportAttackTrend,
  getReportAttackTrends,
  updateReportAttackTrend,
  deleteReportAttackTrend,
} = require("../../services/Reports/ReportAttackTrendServices");

const router = express.Router();
router.use(auth.allowedTo("admin", "user", "soc", "executive"));

router.route("/").get(getReportAttackTrends);
router.route("/:id").get(getReportAttackTrend);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(updateReportAttackTrend)
  .delete(deleteReportAttackTrend);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createReportAttackTrend);
module.exports = router;
