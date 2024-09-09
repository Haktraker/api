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

router.use(auth.allowedTo("admin", "user", "soc", "executive"));

router.route("/").get(getReportSecurityPostureScores);

router.route("/:id").get(getReportSecurityPostureScore);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(updateReportSecurityPostureScore)
  .delete(deleteReportSecurityPostureScore);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createReportSecurityPostureScore);
module.exports = router;
