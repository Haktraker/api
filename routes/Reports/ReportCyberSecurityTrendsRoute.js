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

router.route("/:id").get(getReportCyberSecurityTrend);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(updateReportCyberSecurityTrends)
  .delete(deleteReportCyberSecurityTrends);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createReportCyberSecurityTrends);
module.exports = router;
