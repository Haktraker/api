const express = require("express");
const auth = require("../../services/authServices");
const {
  createBuAlert,
  getBuAlerts,
  getBuAlert,
  updateBuAlert,
  deleteBuAlert,
} = require("../../services/Business_Units_Security/BuAlertsServices");

const router = express.Router();

router.route("/").get(getBuAlerts);
router.route("/:id").get(getBuAlert);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router.route("/:id").patch(updateBuAlert).delete(deleteBuAlert);
router.route("/").post(createBuAlert);
module.exports = router;
