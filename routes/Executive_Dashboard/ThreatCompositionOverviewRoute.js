const express = require("express");
const auth = require("../../services/authServices");
const {
  createThreatCompositionOverview,
  getThreatCompositionOverviews,
  getThreatCompositionOverview,
  updateThreatCompositionOverview,
  deleteThreatCompositionOverview,
} = require("../../services/Executive_Dashboard/ThreatCompositionOverviewServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getThreatCompositionOverviews);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getThreatCompositionOverview);
router.route("/").post(createThreatCompositionOverview);
router
  .route("/:id")
  .patch(updateThreatCompositionOverview)
  .delete(deleteThreatCompositionOverview);
module.exports = router;
