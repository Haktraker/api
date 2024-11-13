const express = require("express");
const auth = require("../../services/authServices");
const {
  createUserBehaviorAnalytic,
  getUserBehaviorAnalytics,
  getUserBehaviorAnalytic,
  updateUserBehaviorAnalytic,
  deleteUserBehaviorAnalytic,
} = require("../../services/User_Behavior/UserBehaviorAnalyticsServices");

const router = express.Router();

router.route("/").get(getUserBehaviorAnalytics);
router.route("/:id").get(getUserBehaviorAnalytic);

router.use(auth.protect);
router.use(auth.allowedTo("admin"));
router
  .route("/:id")
  .patch(updateUserBehaviorAnalytic)
  .delete(deleteUserBehaviorAnalytic);
router.route("/").post(createUserBehaviorAnalytic);
module.exports = router;
