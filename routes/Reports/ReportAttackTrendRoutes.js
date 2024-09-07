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

router.route("/").get(getReportAttackTrends);
router.route("/:id").get(getReportAttackTrend);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createReportAttackTrend);
router
  .route("/:id")
  .patch(updateReportAttackTrend)
  .delete(deleteReportAttackTrend);
module.exports = router;
