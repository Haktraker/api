const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportThirdPartyThreat,
  getReportThirdPartyThreat,
  getReportThirdPartyThreats,
  updateReportThirdPartyThreat,
  deleteReportThirdPartyThreat,
} = require("../../services/Reports/ReportThirdPartyThreatServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getReportThirdPartyThreats);

router.route("/:id").get(getReportThirdPartyThreat);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(updateReportThirdPartyThreat)
  .delete(deleteReportThirdPartyThreat);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createReportThirdPartyThreat);
module.exports = router;
