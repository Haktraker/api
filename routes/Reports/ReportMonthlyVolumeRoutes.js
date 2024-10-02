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

router.route("/").get(getReportMonthlyVolumes);
router.route("/:id").get(getReportMonthlyVolume);

router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportMonthlyVolume)
  .delete(deleteReportMonthlyVolume);
router.route("/").post(createReportMonthlyVolume);
module.exports = router;
