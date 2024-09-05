const express = require("express");
const auth = require("../../services/authServices");
const {
  createThirdPartyThreat,
  getThirdPartyThreat,
  getThirdPartyThreats,
  updateThirdPartyThreat,
  deleteThirdPartyThreat,
} = require("../../services/Executive_Dashboard/ThirdPartyThreatServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getThirdPartyThreats);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getThirdPartyThreat);
router.route("/").post(createThirdPartyThreat);
router
  .route("/:id")
  .patch(updateThirdPartyThreat)
  .delete(deleteThirdPartyThreat);
module.exports = router;
