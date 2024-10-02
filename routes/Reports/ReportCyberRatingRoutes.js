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

router.route("/").get(getReportCyberRatings);
router.route("/:id").get(getReportCyberRating);
router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportCyberRating)
  .delete(deleteReportCyberRating);
router.route("/").post(createReportCyberRating);
module.exports = router;
