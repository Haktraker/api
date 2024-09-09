const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlySecurityPostureScore,
  getQuarterlySecurityPostureScores,
  getQuarterlySecurityPostureScore,
  updateQuarterlySecurityPostureScore,
  deleteQuarterlySecurityPostureScore,
} = require("../../services/Executive_Dashboard/QuarterlySecurityPostureScoreServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));

router.route("/").get(getQuarterlySecurityPostureScores);

router.route("/:id").get(getQuarterlySecurityPostureScore);
router.use(auth.protect, auth.allowedTo("admin", "user"));

router
  .route("/:id")
  .patch(updateQuarterlySecurityPostureScore)
  .delete(deleteQuarterlySecurityPostureScore);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createQuarterlySecurityPostureScore);
module.exports = router;
