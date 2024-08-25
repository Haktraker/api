const express = require("express");
const auth = require("../../services/authServices");
const {
  createSecurityPostureScore,
  getSecurityPostureScores,
  getSecurityPostureScore,
  updateSecurityPostureScore,
  deleteSecurityPostureScore,
} = require("../../services/Executive_Dashboard/SecurityPostureScoreServices");


const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));

router.route("/").get(getSecurityPostureScores);

router.use(auth.protect, auth.allowedTo("admin"));
router
  .route("/:id")
  .get( getSecurityPostureScore);

router
  .route("/")
  .post( createSecurityPostureScore);
router
  .route("/:id")
  .patch( updateSecurityPostureScore)
  .delete( deleteSecurityPostureScore);
module.exports = router;
