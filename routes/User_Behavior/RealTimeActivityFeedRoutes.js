const express = require("express");
const auth = require("../../services/authServices");
const {
  createRealTimeActivityFeed,
  getRealTimeActivityFeeds,
  getRealTimeActivityFeed,
  updateRealTimeActivityFeed,
  deleteRealTimeActivityFeed,
} = require("../../services/User_Behavior/RealTimeActivityFeedServices");

const router = express.Router();

router.route("/").get(getRealTimeActivityFeeds);
router.route("/:id").get(getRealTimeActivityFeed);

router.use(auth.protect);
router.use(auth.allowedTo("admin"));
router
  .route("/:id")
  .patch(updateRealTimeActivityFeed)
  .delete(deleteRealTimeActivityFeed);
router.route("/").post(createRealTimeActivityFeed);
module.exports = router;
