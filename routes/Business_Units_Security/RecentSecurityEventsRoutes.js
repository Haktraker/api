const express = require("express");
const auth = require("../../services/authServices");
const {
  createRecentSecurityEvent,
  getRecentSecurityEvents,
  getRecentSecurityEvent,
  updateRecentSecurityEvent,
  deleteRecentSecurityEvent,
} = require("../../services/Business_Units_Security/RecentSecurityEventsServices");

const router = express.Router();

router.route("/").get(getRecentSecurityEvents);
router.route("/:id").get(getRecentSecurityEvent);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateRecentSecurityEvent)
  .delete(deleteRecentSecurityEvent);
router.route("/").post(createRecentSecurityEvent);
module.exports = router;
