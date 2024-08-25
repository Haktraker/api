const express = require("express");
const auth = require("../../services/authServices");
const {
  createMitreAttacks,
  getMitreAttackss,
  getMitreAttacks,
  updateMitreAttacks,
  deleteMitreAttacks,
} = require("../../services/Attack_Scenarios/MitreAttacksServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getMitreAttackss);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getMitreAttacks);
router.route("/").post(createMitreAttacks);
router.route("/:id").patch(updateMitreAttacks).delete(deleteMitreAttacks);
module.exports = router;
