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

router.route("/").get(getQuarterlyNonComplianceGapsOverviews);
router.route("/:id").get(getQuarterlyNonComplianceGapsOverview);

router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateQuarterlyNonComplianceGapsOverview)
  .delete(deleteQuarterlyNonComplianceGapsOverview);
router.route("/").post(createQuarterlyNonComplianceGapsOverview);
module.exports = router;
