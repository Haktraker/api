const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyNonComplianceGapsOverview,
  getQuarterlyNonComplianceGapsOverviews,
  getQuarterlyNonComplianceGapsOverview,
  updateQuarterlyNonComplianceGapsOverview,
  deleteQuarterlyNonComplianceGapsOverview,
} = require("../../services/Executive_Dashboard/QuarterlyNonComplianceGapsOverviewServices");

const router = express.Router();
router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getQuarterlyNonComplianceGapsOverviews);

router.use(auth.allowedTo("admin"));
router.route("/:id").get(getQuarterlyNonComplianceGapsOverview);
router.route("/").post(createQuarterlyNonComplianceGapsOverview);
router
  .route("/:id")
  .patch(updateQuarterlyNonComplianceGapsOverview)
  .delete(deleteQuarterlyNonComplianceGapsOverview);
module.exports = router;
