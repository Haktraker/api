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
router.use(auth.protect);

router.route("/").get(getReportAttackTrends);
router.route("/:id").get(getReportAttackTrend);
router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportAttackTrend)
  .delete(deleteReportAttackTrend);
router.route("/").post(createReportAttackTrend);
module.exports = router;
