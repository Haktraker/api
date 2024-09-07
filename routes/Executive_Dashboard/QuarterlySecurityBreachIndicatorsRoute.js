const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlySecurityBreachIndicators,
  getQuarterlySecurityBreachIndicatorss,
  getQuarterlySecurityBreachIndicators,
  updateQuarterlySecurityBreachIndicators,
  deleteQuarterlySecurityBreachIndicators,
} = require("../../services/Executive_Dashboard/QuarterlySecurityBreachIndicatorsServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getQuarterlySecurityBreachIndicatorss);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getQuarterlySecurityBreachIndicators);
router.route("/").post(createQuarterlySecurityBreachIndicators);
router
  .route("/:id")
  .patch(updateQuarterlySecurityBreachIndicators)
  .delete(deleteQuarterlySecurityBreachIndicators);
module.exports = router;
