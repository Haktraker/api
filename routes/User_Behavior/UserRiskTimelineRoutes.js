const express = require("express");
const auth = require("../../services/authServices");
const {
  createUserRiskTimeline,
  getUserRiskTimelines,
  getUserRiskTimeline,
  updateUserRiskTimeline,
  deleteUserRiskTimeline,
} = require("../../services/User_Behavior/UserRiskTimelineServices");

const router = express.Router();

router.route("/").get(getUserRiskTimelines);
router.route("/:id").get(getUserRiskTimeline);

router.use(auth.protect);
router.use(auth.allowedTo("admin"));
router
  .route("/:id")
  .patch(updateUserRiskTimeline)
  .delete(deleteUserRiskTimeline);
router.route("/").post(createUserRiskTimeline);
module.exports = router;
