const express = require("express");
const auth = require("../../services/authServices");
const {
  createUserBehaviorPatternAnalysis,
  getUserBehaviorPatternAnalysiss,
  getUserBehaviorPatternAnalysis,
  updateUserBehaviorPatternAnalysis,
  deleteUserBehaviorPatternAnalysis,
} = require("../../services/User_Behavior/UserBehaviorPatternAnalysisServices");

const router = express.Router();

router.route("/").get(getUserBehaviorPatternAnalysiss);
router.route("/:id").get(getUserBehaviorPatternAnalysis);

router.use(auth.protect);
router.use(auth.allowedTo("admin"));
router
  .route("/:id")
  .patch(updateUserBehaviorPatternAnalysis)
  .delete(deleteUserBehaviorPatternAnalysis);
router.route("/").post(createUserBehaviorPatternAnalysis);
module.exports = router;
