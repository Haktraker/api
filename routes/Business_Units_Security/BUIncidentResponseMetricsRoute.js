const express = require("express");
const auth = require("../../services/authServices");
const {
  createBUIncidentResponseMetric,
  getBUIncidentResponseMetrics,
  getBUIncidentResponseMetric,
  updateBUIncidentResponseMetric,
  deleteBUIncidentResponseMetric,
} = require("../../services/Business_Units_Security/BUIncidentResponseMetricsServices");

const router = express.Router();

router.use(auth.protect);

router.route("/").get(getBUIncidentResponseMetrics);
router.route("/:id").get(getBUIncidentResponseMetric);

router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateBUIncidentResponseMetric)
  .delete(deleteBUIncidentResponseMetric);
router.route("/").post(createBUIncidentResponseMetric);
module.exports = router;
