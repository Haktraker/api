const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportMonthlyVolume,
  getReportMonthlyVolume,
  getReportMonthlyVolumes,
  updateReportMonthlyVolume,
  deleteReportMonthlyVolume,
} = require("../../services/Reports/ReportMonthlyVolumeServices");

const router = express.Router();
router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));

router.route("/").get(getReportMonthlyVolumes);
router.route("/:id").get(getReportMonthlyVolume);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(updateReportMonthlyVolume)
  .delete(deleteReportMonthlyVolume);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createReportMonthlyVolume);
module.exports = router;
