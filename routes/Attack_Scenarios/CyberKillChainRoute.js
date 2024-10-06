const express = require("express");
const auth = require("../../services/authServices");
const {
  createCyberKillChain,
  getCyberKillChains,
  getCyberKillChain,
  updateCyberKillChain,
  deleteCyberKillChain,
} = require("../../services/Attack_Scenarios/CyberKillChainServices");

const router = express.Router();

router.route("/").get(getCyberKillChains);
router.route("/:id").get(getCyberKillChain);

router.use(auth.protect);
router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router.route("/:id").patch(updateCyberKillChain).delete(deleteCyberKillChain);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createCyberKillChain);
module.exports = router;
