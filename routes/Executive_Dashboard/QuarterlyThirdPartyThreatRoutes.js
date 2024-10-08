const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyThirdPartyThreat,
  getQuarterlyThirdPartyThreat,
  getQuarterlyThirdPartyThreats,
  updateQuarterlyThirdPartyThreat,
  deleteQuarterlyThirdPartyThreat,
} = require("../../services/Executive_Dashboard/QuarterlyThirdPartyThreatServices");

const router = express.Router();

router.route("/").get(getQuarterlyThirdPartyThreats);
router.route("/:id").get(getQuarterlyThirdPartyThreat);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateQuarterlyThirdPartyThreat)
  .delete(deleteQuarterlyThirdPartyThreat);
router.route("/").post(createQuarterlyThirdPartyThreat);
module.exports = router;
