const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportSecurityBreachIndicators,
  getReportSecurityBreachIndicators,
  getReportSecurityBreachIndicator,
  updateReportSecurityBreachIndicators,
  deleteReportSecurityBreachIndicators,
} = require("../../services/Reports/ReportSecurityBreachIndicatorsServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getReportSecurityBreachIndicators);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getReportSecurityBreachIndicator);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(updateReportSecurityBreachIndicators)
  .delete(deleteReportSecurityBreachIndicators);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createReportSecurityBreachIndicators);
module.exports = router;
