const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyThreatCompositionOverview,
  getQuarterlyThreatCompositionOverviews,
  getQuarterlyThreatCompositionOverview,
  updateQuarterlyThreatCompositionOverview,
  deleteQuarterlyThreatCompositionOverview,
} = require("../../services/Executive_Dashboard/QuarterlyThreatCompositionOverviewServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getQuarterlyThreatCompositionOverviews);

router.route("/:id").get(getQuarterlyThreatCompositionOverview);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(updateQuarterlyThreatCompositionOverview)
  .delete(deleteQuarterlyThreatCompositionOverview);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createQuarterlyThreatCompositionOverview);
module.exports = router;
