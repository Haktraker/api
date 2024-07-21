const { check } = require("express-validator");
const validatorMiddleWare = require("../../../middlewares/validatorMiddleWare");

exports.getleakedCredentialValidator = [
  check("id").isMongoId().withMessage("Invalid Credentials ID Formate"),
  validatorMiddleWare,
];

exports.createleakedCredentialsValidator = [
  check("user").notEmpty().withMessage("Credentials user Required"),
  check("password").notEmpty().withMessage("Credentials password Required"),
  check("source").notEmpty().withMessage("Credentials source Required"),
  check("bu").notEmpty().withMessage("Credentials bu Required"),
  check("mitigationSteps")
    .notEmpty()
    .withMessage("Credentials mitigationSteps Required"),
  check("leakDate").notEmpty().withMessage("Credentials leakDate Required"),
  validatorMiddleWare,
];

exports.updateleakedCredentialValidator = [
  check("id").isMongoId().withMessage("Invalid Credentials ID Formate"),
  check("value").optional(),
  validatorMiddleWare,
];

exports.deleteleakedCredentialValidator = [
  check("id").isMongoId().withMessage("Invalid Credentials ID Formate"),
  validatorMiddleWare,
];
