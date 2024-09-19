const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlySecurityEvent,
  getQuarterlySecurityEvent,
  getQuarterlySecurityEvents,
  updateQuarterlySecurityEvent,
  deleteQuarterlySecurityEvent,
} = require("../../services/Executive_Dashboard/QuarterlySecurityEventServices");

const router = express.Router();
router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));

router.route("/").get(getQuarterlySecurityEvents);
router.route("/:id").get(getQuarterlySecurityEvent);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(updateQuarterlySecurityEvent)
  .delete(deleteQuarterlySecurityEvent);
router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createQuarterlySecurityEvent);
module.exports = router;
