const express = require("express");
const auth = require("../services/authServices");
const {
  createCyberRating,
  getCyberRating,
  getCyberRatings,
  updateCyberRating,
  deleteCyberRating,
} = require("../services/CyberRatingServices");

const router = express.Router();

router.route("/").get(getCyberRatings);
router.route("/:id").get(getCyberRating);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router.route("/:id").patch(updateCyberRating).delete(deleteCyberRating);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createCyberRating);
module.exports = router;
