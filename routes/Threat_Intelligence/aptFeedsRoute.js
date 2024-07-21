const express = require("express");
const auth = require("../../services/authServices");
const {
  createAPTFeeds,
  getAPTFeeds,
  getAPTFeed,
  updateAPTFeed,
  deleteAPTFeed,
} = require("../../services/Threat_Intelligence/aptFeedsServices");
const {
  getAPTFeedValidator,
  createAPTFeedsValidator,
  updateAPTFeedValidator,
  deleteAPTFeedValidator,
} = require("../../utils/validators/Threat_Intelligence/aptFeedsValidator");

const router = express.Router();

router.route("/").get(getAPTFeeds);
router.route("/:id").get(getAPTFeedValidator, getAPTFeed);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createAPTFeedsValidator, createAPTFeeds);
router
  .route("/:id")
  .patch(updateAPTFeedValidator, updateAPTFeed)
  .delete(deleteAPTFeedValidator, deleteAPTFeed);
module.exports = router;
