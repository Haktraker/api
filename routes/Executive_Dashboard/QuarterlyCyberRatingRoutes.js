const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyCyberRating,
  getQuarterlyCyberRatings,
  getQuarterlyCyberRating,
  updateQuarterlyCyberRating,
  deleteQuarterlyCyberRating,
} = require("../../services/Executive_Dashboard/QuarterlyCyberRatingServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getQuarterlyCyberRatings);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getQuarterlyCyberRating);
router.route("/").post(createQuarterlyCyberRating);
router
  .route("/:id")
  .patch(updateQuarterlyCyberRating)
  .delete(deleteQuarterlyCyberRating);
module.exports = router;
