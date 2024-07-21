const { check } = require("express-validator");
const validatorMiddleWare = require("../../middlewares/validatorMiddleWare");

exports.getBrandReputationValidator = [
  check("id").isMongoId().withMessage("Invalid AttackSurface ID Formate"),
  validatorMiddleWare,
];

exports.createBrandReputationsValidator = [
  check("domainName")
    .notEmpty()
    .withMessage("Brand Reputation domain Name required"),
  check("brandName")
    .notEmpty()
    .withMessage("Brand Reputation brand Name required"),
  check("incidentDescription")
    .notEmpty()
    .withMessage("Brand Reputation incident Description required"),
  check("status").notEmpty().withMessage("Brand Reputation status required"),
  check("mitigationSteps")
    .notEmpty()
    .withMessage("Brand Reputation mitigation Steps required"),
  validatorMiddleWare,
];

exports.updateBrandReputationValidator = [
  check("id").isMongoId().withMessage("Invalid Brand Reputation ID Formate"),
  validatorMiddleWare,
];

exports.deleteBrandReputationValidator = [
  check("id").isMongoId().withMessage("Invalid Brand Reputation ID Formate"),
  validatorMiddleWare,
];
