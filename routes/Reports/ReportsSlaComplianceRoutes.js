const express = require("express");
const auth = require("../../services/authServices");
const {
  createSlaCompliance,
  getSlaCompliances,
  getSlaCompliance,
  updateSlaCompliance,
  deleteSlaCompliance,
} = require("../../services/Reports/ReportSLAComplianceServices");

const router = express.Router();

router.use(auth.protect);
router.route("/").get(getSlaCompliances);
router.route("/:id").get(getSlaCompliance);
router.use(auth.allowedTo("admin"));

router.route("/:id").patch(updateSlaCompliance).delete(deleteSlaCompliance);
router.route("/").post(createSlaCompliance);
module.exports = router;
