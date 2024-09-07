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

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getQuarterlySecurityPostureScore);

router.route("/").post(createQuarterlySecurityPostureScore);
router
  .route("/:id")
  .patch(updateQuarterlySecurityPostureScore)
  .delete(deleteQuarterlySecurityPostureScore);
module.exports = router;
