const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportAttackTrendsAcrosstheLockheedCyberKillChain,
  getReportAttackTrendsAcrosstheLockheedCyberKillChain,
  getReportAttackTrendsAcrosstheLockheedCyberKillChains,
  updateReportAttackTrendsAcrosstheLockheedCyberKillChain,
  deleteReportAttackTrendsAcrosstheLockheedCyberKillChain,
} = require("../../services/Reports/ReportAttackTrendsAcrosstheLockheedCyberKillChainServices");

const router = express.Router();
router.use(auth.allowedTo("admin", "user", "soc", "executive"));

router.route("/").get(getReportAttackTrendsAcrosstheLockheedCyberKillChains);
router.route("/:id").get(getReportAttackTrendsAcrosstheLockheedCyberKillChain);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(updateReportAttackTrendsAcrosstheLockheedCyberKillChain)
  .delete(deleteReportAttackTrendsAcrosstheLockheedCyberKillChain);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createReportAttackTrendsAcrosstheLockheedCyberKillChain);
module.exports = router;
