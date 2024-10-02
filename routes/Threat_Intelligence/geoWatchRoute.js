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
router.use(auth.protect);

router.route("/").get(getGeoWatchs);
router.route("/:id").get(getGeoWatch);

router.use(auth.allowedTo("admin"));

router.route("/").post(createGeoWatch);
router.route("/:id").patch(updateGeoWatch).delete(deleteGeoWatch);
module.exports = router;
