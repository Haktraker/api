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

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getQuarterlyThirdPartyThreats);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getQuarterlyThirdPartyThreat);
router.route("/").post(createQuarterlyThirdPartyThreat);
router
  .route("/:id")
  .patch(updateQuarterlyThirdPartyThreat)
  .delete(deleteQuarterlyThirdPartyThreat);
module.exports = router;
