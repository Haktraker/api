const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyIncident,
  getQuarterlyIncidents,
  getQuarterlyIncident,
  updateQuarterlyIncident,
  deleteQuarterlyIncident,
} = require("../../services/Executive_Dashboard/QuarterlyIncidentServices");

const router = express.Router();

router.route("/").get(getQuarterlyIncidents);
router.route("/:id").get(getQuarterlyIncident);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));

router.route("/").post(createQuarterlyIncident);
router
  .route("/:id")
  .patch(updateQuarterlyIncident)
  .delete(deleteQuarterlyIncident);
module.exports = router;
