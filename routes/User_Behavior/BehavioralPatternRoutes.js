const express = require("express");
const auth = require("../../services/authServices");
const {
  createBehavioralPattern,
  getBehavioralPatterns,
  getBehavioralPattern,
  updateBehavioralPattern,
  deleteBehavioralPattern,
} = require("../../services/User_Behavior/BehavioralPatternServices");

const router = express.Router();

router.route("/").get(getBehavioralPatterns);
router.route("/:id").get(getBehavioralPattern);

router.use(auth.protect);
router.use(auth.allowedTo("admin"));
router
  .route("/:id")
  .patch(updateBehavioralPattern)
  .delete(deleteBehavioralPattern);
router.route("/").post(createBehavioralPattern);
module.exports = router;
