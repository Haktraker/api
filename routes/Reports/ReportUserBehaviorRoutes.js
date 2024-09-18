const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportUserBehavior,
  getReportUserBehavior,
  getReportUserBehaviors,
  updateReportUserBehavior,
  deleteReportUserBehavior,
} = require("../../services/Reports/ReportUserBehaviourServices");

const router = express.Router();
router.use(auth.allowedTo("admin", "user", "soc", "executive"));

router.route("/").get(getReportUserBehaviors);
router.route("/:id").get(getReportUserBehavior);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(updateReportUserBehavior)
  .delete(deleteReportUserBehavior);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createReportUserBehavior);
module.exports = router;
