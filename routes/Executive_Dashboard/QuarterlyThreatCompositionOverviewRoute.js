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

router.route("/").get(getQuarterlyThreatCompositionOverviews);
router.route("/:id").get(getQuarterlyThreatCompositionOverview);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateQuarterlyThreatCompositionOverview)
  .delete(deleteQuarterlyThreatCompositionOverview);
router.route("/").post(createQuarterlyThreatCompositionOverview);
module.exports = router;
