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
router.route("/").post(createReportSecurityBreachIndicators);
router
  .route("/:id")
  .patch(updateReportSecurityBreachIndicators)
  .delete(deleteReportSecurityBreachIndicators);
module.exports = router;
