const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportSecurityEvent,
  getReportSecurityEvent,
  getReportSecurityEvents,
  updateReportSecurityEvent,
  deleteReportSecurityEvent,
} = require("../../services/Reports/ReportSecurityEventServices");

const router = express.Router();

router.route("/").get(getReportSecurityEvents);
router.route("/:id").get(getReportSecurityEvent);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(updateReportSecurityEvent)
  .delete(deleteReportSecurityEvent);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createReportSecurityEvent);
module.exports = router;
