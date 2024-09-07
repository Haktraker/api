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

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getQuarterlyCyberResilienceTime);
router.route("/").post(createQuarterlyCyberResilienceTime);
router
  .route("/:id")
  .patch(updateQuarterlyCyberResilienceTime)
  .delete(deleteQuarterlyCyberResilienceTime);
module.exports = router;
