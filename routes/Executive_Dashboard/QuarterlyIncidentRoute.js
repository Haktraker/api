const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyIncident,
  getQuarterlyIncidents,
  getQuarterlyIncident,
  updateQuarterlyIncident,
  deleteQuarterlyIncident,
} = require("../../services/Executive_Dashboard/QuarterlyincidentServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));

router.route("/").get(getQuarterlyIncidents);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getQuarterlyIncident);

router.route("/").post(createQuarterlyIncident);
router
  .route("/:id")
  .patch(updateQuarterlyIncident)
  .delete(deleteQuarterlyIncident);
module.exports = router;
