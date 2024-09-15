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

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getSlaCompliances);

router.route("/:id").get(getSlaCompliance);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router.route("/:id").patch(updateSlaCompliance).delete(deleteSlaCompliance);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createSlaCompliance);
module.exports = router;
