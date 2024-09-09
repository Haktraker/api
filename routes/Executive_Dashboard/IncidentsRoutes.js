const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyIncident,
  getQuarterlyIncidents,
  getQuarterlyIncident,
  updateQuarterlyIncident,
  deleteQuarterlyIncident,
} = require("../../services/Executive_Dashboard/IncidentsQu");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));

router.route("/").get(getQuarterlyIncidents);

router.route("/:id").get(getQuarterlyIncident);
router.use(auth.protect, auth.allowedTo("admin", "user"));

router
  .route("/:id")
  .patch(updateQuarterlyIncident)
  .delete(deleteQuarterlyIncident);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createQuarterlyIncident);
module.exports = router;
