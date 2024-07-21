const { check } = require("express-validator");
const validatorMiddleWare = require("../../../middlewares/validatorMiddleWare");

exports.getportalValidator = [
  check("id").isMongoId().withMessage("Invalid portal ID Formate"),
  validatorMiddleWare,
];

exports.createportalsValidator = [
  check("value").notEmpty().withMessage("portal value Required"),
  check("location").notEmpty().withMessage("portal location Required"),
  check("description").notEmpty().withMessage("portal description Required"),
  validatorMiddleWare,
];

exports.updateportalsValidator = [
  check("id").isMongoId().withMessage("Invalid portal ID Formate"),
  check("value").optional(),
  validatorMiddleWare,
];

exports.deleteportalsValidator = [
  check("id").isMongoId().withMessage("Invalid portal ID Formate"),
  validatorMiddleWare,
];
