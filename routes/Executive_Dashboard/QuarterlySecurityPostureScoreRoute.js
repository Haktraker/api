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

router.route("/").get(getQuarterlySecurityPostureScores);
router.route("/:id").get(getQuarterlySecurityPostureScore);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateQuarterlySecurityPostureScore)
  .delete(deleteQuarterlySecurityPostureScore);
router.route("/").post(createQuarterlySecurityPostureScore);
module.exports = router;
