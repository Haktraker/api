const express = require("express");
const auth = require("../../services/authServices");
const {
  createCyberResilienceTime,
  getCyberResilienceTimes,
  getCyberResilienceTime,
  updateCyberResilienceTime,
  deleteCyberResilienceTime,
} = require("../../services/Executive_Dashboard/CyberResilienceTimeServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getCyberResilienceTimes);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getCyberResilienceTime);
router.route("/").post(createCyberResilienceTime);
router
  .route("/:id")
  .patch(updateCyberResilienceTime)
  .delete(deleteCyberResilienceTime);
module.exports = router;
