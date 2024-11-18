const express = require("express");
const auth = require("../../services/authServices");
const {
  createAlertSeverityTrend,
  getAlertSeverityTrends,
  getAlertSeverityTrend,
  updateAlertSeverityTrend,
  deleteAlertSeverityTrend,
} = require("../../services/Business_Units_Security/AlertSeverityTrendServices");

const router = express.Router();

router.route("/").get(getAlertSeverityTrends);
router.route("/:id").get(getAlertSeverityTrend);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateAlertSeverityTrend)
  .delete(deleteAlertSeverityTrend);
router.route("/").post(createAlertSeverityTrend);
module.exports = router;
