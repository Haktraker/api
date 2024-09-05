const express = require("express");
const auth = require("../../services/authServices");
const {
  createGeoWatch,
  getGeoWatch,
  getGeoWatchs,
  updateGeoWatch,
  deleteGeoWatch,
} = require("../../services/Threat_Intelligence/geoWatch");

const router = express.Router();

router.route("/").get(getGeoWatchs);
router.route("/:id").get(getGeoWatch);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createGeoWatch);
router.route("/:id").patch(updateGeoWatch).delete(deleteGeoWatch);
module.exports = router;
