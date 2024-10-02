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

router.route("/").get(getQuarterlySecurityBreachIndicatorss);
router.route("/:id").get(getQuarterlySecurityBreachIndicators);

router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateQuarterlySecurityBreachIndicators)
  .delete(deleteQuarterlySecurityBreachIndicators);
router.route("/").post(createQuarterlySecurityBreachIndicators);
module.exports = router;
