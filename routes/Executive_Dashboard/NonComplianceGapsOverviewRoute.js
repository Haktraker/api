const express = require("express");
const auth = require("../../services/authServices");
const {
  createNonComplianceGapsOverview,
  getNonComplianceGapsOverviews,
  getNonComplianceGapsOverview,
  updateNonComplianceGapsOverview,
  deleteNonComplianceGapsOverview,
} = require("../../services/Executive_Dashboard/NonComplianceGapsOverviewServices");

const router = express.Router();
router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getNonComplianceGapsOverviews);

router.use(auth.allowedTo("admin"));
router.route("/:id").get(getNonComplianceGapsOverview);
router.route("/").post(createNonComplianceGapsOverview);
router
  .route("/:id")
  .patch(updateNonComplianceGapsOverview)
  .delete(deleteNonComplianceGapsOverview);
module.exports = router;
