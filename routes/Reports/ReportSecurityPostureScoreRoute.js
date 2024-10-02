const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportSecurityPostureScore,
  getReportSecurityPostureScores,
  getReportSecurityPostureScore,
  updateReportSecurityPostureScore,
  deleteReportSecurityPostureScore,
} = require("../../services/Reports/ReportSecurityPostureScoreServices");

const router = express.Router();

router.use(auth.protect);
router.route("/").get(getReportSecurityPostureScores);
router.route("/:id").get(getReportSecurityPostureScore);
router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportSecurityPostureScore)
  .delete(deleteReportSecurityPostureScore);
router.route("/").post(createReportSecurityPostureScore);
module.exports = router;
