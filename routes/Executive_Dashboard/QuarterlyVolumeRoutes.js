const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyVolume,
  getQuarterlyVolumes,
  getQuarterlyVolume,
  updateQuarterlyVolume,
  deleteQuarterlyVolume,
} = require("../../services/Executive_Dashboard/QuarterlyVolumeServices");

const router = express.Router();

router.route("/").get(getQuarterlyVolumes);
router.route("/:id").get(getQuarterlyVolume);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));

router.route("/:id").patch(updateQuarterlyVolume).delete(deleteQuarterlyVolume);
router.route("/").post(createQuarterlyVolume);
module.exports = router;
