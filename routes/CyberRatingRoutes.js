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

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));

router.route("/:id").patch(updateCyberRating).delete(deleteCyberRating);
router.route("/").post(createCyberRating);
module.exports = router;
