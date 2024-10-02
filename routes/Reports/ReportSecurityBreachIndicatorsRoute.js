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

router.route("/").get(getReportSecurityBreachIndicators);
router.route("/:id").get(getReportSecurityBreachIndicator);
router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateReportSecurityBreachIndicators)
  .delete(deleteReportSecurityBreachIndicators);
router.route("/").post(createReportSecurityBreachIndicators);
module.exports = router;
