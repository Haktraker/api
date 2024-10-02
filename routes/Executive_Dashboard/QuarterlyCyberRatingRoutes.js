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
router.route("/").get(getQuarterlyCyberRatings);
router.route("/:id").get(getQuarterlyCyberRating);

router.use(auth.allowedTo("admin"));
router
  .route("/:id")
  .patch(updateQuarterlyCyberRating)
  .delete(deleteQuarterlyCyberRating);
router.route("/").post(createQuarterlyCyberRating);
module.exports = router;
