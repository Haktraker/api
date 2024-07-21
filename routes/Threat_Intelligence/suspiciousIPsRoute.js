const express = require("express");
const auth = require("../../services/authServices");
const {
  createSuspiciousIPs,
  getSuspiciousIPs,
  getSuspiciousIP,
  updateSuspiciousIP,
  deleteSuspiciousIP,
} = require("../../services/Threat_Intelligence/suspiciousIPsServices");
const {
  getSuspiciousIPValidator,
  createSuspiciousIPsValidator,
  updateSuspiciousIPValidator,
  deleteSuspiciousIPValidator,
} = require("../../utils/validators/Threat_Intelligence/suspiciousIPsValidator");

const router = express.Router();

router.route("/").get(getSuspiciousIPs);
router.route("/:id").get(getSuspiciousIPValidator, getSuspiciousIP);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createSuspiciousIPsValidator, createSuspiciousIPs);
router
  .route("/:id")
  .patch(updateSuspiciousIPValidator, updateSuspiciousIP)
  .delete(deleteSuspiciousIPValidator, deleteSuspiciousIP);
module.exports = router;
