const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyCyberResilienceTime,
  getQuarterlyCyberResilienceTimes,
  getQuarterlyCyberResilienceTime,
  updateQuarterlyCyberResilienceTime,
  deleteQuarterlyCyberResilienceTime,
} = require("../../services/Executive_Dashboard/QuarterlyCyberResilienceTimeServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getQuarterlyCyberResilienceTimes);

router.route("/:id").get(getQuarterlyCyberResilienceTime);
router.use(auth.protect, auth.allowedTo("admin", "user"));

router
  .route("/:id")
  .patch(updateQuarterlyCyberResilienceTime)
  .delete(deleteQuarterlyCyberResilienceTime);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createQuarterlyCyberResilienceTime);
module.exports = router;
