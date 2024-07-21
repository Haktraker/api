const { check } = require("express-validator");
const validatorMiddleWare = require("../../middlewares/validatorMiddleWare");

exports.getAttackSurfaceValidator = [
  check("id").isMongoId().withMessage("Invalid AttackSurface ID Formate"),
  validatorMiddleWare,
];

exports.createAttackSurfacesValidator = [
  check("affectedSystems")
    .notEmpty()
    .withMessage("AttackSurface affected Systems Required"),
  check("openPorts")
    .notEmpty()
    .withMessage("AttackSurface open Ports Required"),
  check("services").notEmpty().withMessage("AttackSurface services Required"),
  check("mitigationSteps")
    .notEmpty()
    .withMessage("AttackSurface mitigationSteps Required"),

  validatorMiddleWare,
];

exports.updateAttackSurfaceValidator = [
  check("id").isMongoId().withMessage("Invalid AttackSurface ID Formate"),
  validatorMiddleWare,
];

exports.deleteAttackSurfaceValidator = [
  check("id").isMongoId().withMessage("Invalid AttackSurface ID Formate"),
  validatorMiddleWare,
];
