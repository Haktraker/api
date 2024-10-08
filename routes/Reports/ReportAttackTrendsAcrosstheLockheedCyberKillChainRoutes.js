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
router.use(auth.protect);

router.route("/").get(getReportAttackTrendsAcrosstheLockheedCyberKillChains);
router.route("/:id").get(getReportAttackTrendsAcrosstheLockheedCyberKillChain);
router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportAttackTrendsAcrosstheLockheedCyberKillChain)
  .delete(deleteReportAttackTrendsAcrosstheLockheedCyberKillChain);
router.route("/").post(createReportAttackTrendsAcrosstheLockheedCyberKillChain);
module.exports = router;
