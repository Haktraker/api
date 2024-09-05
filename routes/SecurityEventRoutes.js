const express = require("express");
const auth = require("../services/authServices");
const {
  createSecurityEvent,
  getSecurityEvent,
  getSecurityEvents,
  updateSecurityEvent,
  deleteSecurityEvent,
} = require("../services/SecurityEventServices");

const router = express.Router();

router.route("/").get(getSecurityEvents);
router.route("/:id").get(getSecurityEvent);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createSecurityEvent);
router.route("/:id").patch(updateSecurityEvent).delete(deleteSecurityEvent);
module.exports = router;
