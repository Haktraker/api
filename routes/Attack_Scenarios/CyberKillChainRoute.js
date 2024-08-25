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

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getCyberKillChains);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getCyberKillChain);
router.route("/").post(createCyberKillChain);
router.route("/:id").patch(updateCyberKillChain).delete(deleteCyberKillChain);
module.exports = router;
