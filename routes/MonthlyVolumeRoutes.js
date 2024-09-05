const express = require("express");
const auth = require("../services/authServices");
const {
  createMonthlyVolume,
  getMonthlyVolume,
  getMonthlyVolumes,
  updateMonthlyVolume,
  deleteMonthlyVolume,
} = require("../services/MonthlyVolumeServices");

const router = express.Router();

router.route("/").get(getMonthlyVolumes);
router.route("/:id").get(getMonthlyVolume);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createMonthlyVolume);
router.route("/:id").patch(updateMonthlyVolume).delete(deleteMonthlyVolume);
module.exports = router;
