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

router.route("/").get(getReportThirdPartyThreats);

router.route("/:id").get(getReportThirdPartyThreat);
router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportThirdPartyThreat)
  .delete(deleteReportThirdPartyThreat);
router.route("/").post(createReportThirdPartyThreat);
module.exports = router;
