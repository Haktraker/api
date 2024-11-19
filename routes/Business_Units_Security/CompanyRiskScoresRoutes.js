const express = require("express");
const auth = require("../../services/authServices");
const {
  createCompanyRiskScore,
  getCompanyRiskScores,
  getCompanyRiskScore,
  updateCompanyRiskScore,
  deleteCompanyRiskScore,
} = require("../../services/Business_Units_Security/CompanyRiskScoresServices");

const router = express.Router();

router.route("/").get(getCompanyRiskScores);
router.route("/:id").get(getCompanyRiskScore);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateCompanyRiskScore)
  .delete(deleteCompanyRiskScore);
router.route("/").post(createCompanyRiskScore);
module.exports = router;
