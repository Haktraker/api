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

router.route("/").get(getQuarterlyIncidents);
router.route("/:id").get(getQuarterlyIncident);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateQuarterlyIncident)
  .delete(deleteQuarterlyIncident);
router.route("/").post(createQuarterlyIncident);
module.exports = router;
