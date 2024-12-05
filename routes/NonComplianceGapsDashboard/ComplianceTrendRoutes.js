const express = require("express");
const auth = require("../../services/authServices");
const {
  createComplianceTrend,
  getComplianceTrends,
  getComplianceTrend,
  updateComplianceTrend,
  deleteComplianceTrend,
} = require("../../services/NonComplianceGapsDashboard/ComplianceTrendServices");

const router = express.Router();

router.route("/").get(getComplianceTrends);
router.route("/:id").get(getComplianceTrend);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateComplianceTrend)
  .delete(deleteComplianceTrend);
router.route("/").post(createComplianceTrend);
module.exports = router;
