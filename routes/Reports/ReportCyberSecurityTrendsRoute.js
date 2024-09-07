const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportCyberSecurityTrends,
  getReportCyberSecurityTrends,
  getReportCyberSecurityTrend,
  updateReportCyberSecurityTrends,
  deleteReportCyberSecurityTrends,
} = require("../../services/Reports/ReportCyberSecurityTrendsServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getReportCyberSecurityTrends);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getReportCyberSecurityTrend);
router.route("/").post(createReportCyberSecurityTrends);
router
  .route("/:id")
  .patch(updateReportCyberSecurityTrends)
  .delete(deleteReportCyberSecurityTrends);
module.exports = router;
