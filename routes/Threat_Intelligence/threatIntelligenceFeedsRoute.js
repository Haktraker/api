const express = require("express");
const auth = require("../../services/authServices");
const {
  createThreatIntelligenceFeeds,
  getThreatIntelligenceFeeds,
  getThreatIntelligenceFeed,
  updateThreatIntelligenceFeed,
  deleteThreatIntelligenceFeed,
} = require("../../services/Threat_Intelligence/threatIntelligenceFeedsServices");
const {
  getThreatIntelligenceFeedValidator,
  createThreatIntelligenceFeedsValidator,
  updateThreatIntelligenceFeedValidator,
  deleteThreatIntelligenceFeedValidator,
} = require("../../utils/validators/Threat_Intelligence/threatIntelligenceFeedsValidator");

const router = express.Router();

router.route("/").get(getThreatIntelligenceFeeds);
router.route("/:id").get(getThreatIntelligenceFeedValidator, getThreatIntelligenceFeed);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createThreatIntelligenceFeedsValidator, createThreatIntelligenceFeeds);
router
  .route("/:id")
  .patch(updateThreatIntelligenceFeedValidator, updateThreatIntelligenceFeed)
  .delete(deleteThreatIntelligenceFeedValidator, deleteThreatIntelligenceFeed);
module.exports = router;
