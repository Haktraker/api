const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportLockHeadPhase,
  getReportLockHeadPhases,
  getReportLockHeadPhase,
  updateReportLockHeadPhase,
  deleteReportLockHeadPhase,
} = require("../../services/Reports/ReportLockHeadPhaseServices");

const router = express.Router();

router.use(auth.protect);

router.route("/").get(getReportLockHeadPhases);
router.route("/:id").get(getReportLockHeadPhase);

router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportLockHeadPhase)
  .delete(deleteReportLockHeadPhase);
router.route("/").post(createReportLockHeadPhase);
module.exports = router;
