const express = require("express");
const auth = require("../../services/authServices");
const {
  createSecurityIncidentTrend,
  getSecurityIncidentTrends,
  getSecurityIncidentTrend,
  updateSecurityIncidentTrend,
  deleteSecurityIncidentTrend,
} = require("../../services/SecurityBreachIndicatorsDashboard/SecurityIncidentTrendServices");

const router = express.Router();

router.route("/").get(getSecurityIncidentTrends);
router.route("/:id").get(getSecurityIncidentTrend);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateSecurityIncidentTrend)
  .delete(deleteSecurityIncidentTrend);
router.route("/").post(createSecurityIncidentTrend);
module.exports = router;
