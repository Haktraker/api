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

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getQuarterlyVolumes);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getQuarterlyVolume);
router.route("/").post(createQuarterlyVolume);
router.route("/:id").patch(updateQuarterlyVolume).delete(deleteQuarterlyVolume);
module.exports = router;
