const express = require("express");
const auth = require("../../services/authServices");
const {
  createRiskAssessmentByBu,
  getRiskAssessmentsByBu,
  getRiskAssessmentByBu,
  updateRiskAssessmentByBu,
  deleteRiskAssessmentByBu,
} = require("../../services/Business_Units_Security/RiskAssessmentByBuServices");

const router = express.Router();

router.route("/").get(getRiskAssessmentsByBu);
router.route("/:id").get(getRiskAssessmentByBu);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateRiskAssessmentByBu)
  .delete(deleteRiskAssessmentByBu);
router.route("/").post(createRiskAssessmentByBu);
module.exports = router;
