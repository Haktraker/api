const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportCyberRating,
  getReportCyberRating,
  getReportCyberRatings,
  updateReportCyberRating,
  deleteReportCyberRating,
} = require("../../services/Reports/ReportCyberRatingServices");

const router = express.Router();
router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));

router.route("/").get(getReportCyberRatings);
router.route("/:id").get(getReportCyberRating);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(updateReportCyberRating)
  .delete(deleteReportCyberRating);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createReportCyberRating);
module.exports = router;
