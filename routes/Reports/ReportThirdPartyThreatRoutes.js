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

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getReportThirdPartyThreat);
router.route("/").post(createReportThirdPartyThreat);
router
  .route("/:id")
  .patch(updateReportThirdPartyThreat)
  .delete(deleteReportThirdPartyThreat);
module.exports = router;
