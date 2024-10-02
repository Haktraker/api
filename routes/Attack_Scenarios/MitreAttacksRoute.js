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
router.route("/").get(getMitreAttackss);
router.route("/:id").get(getMitreAttacks);
router.use(auth.allowedTo("admin"));

router.route("/:id").patch(updateMitreAttacks).delete(deleteMitreAttacks);
router.route("/").post(createMitreAttacks);
module.exports = router;
