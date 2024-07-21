const { check } = require("express-validator");
const validatorMiddleWare = require("../../../middlewares/validatorMiddleWare");

exports.getDomainValidator = [
  check("id").isMongoId().withMessage("Invalid Domain ID Formate"),
  validatorMiddleWare,
];

exports.createDomainValidator = [
  check("value").notEmpty().withMessage("Domain value Required"),
  check("location").notEmpty().withMessage("Domain location Required"),
  check("description").notEmpty().withMessage("Domain description Required"),
  validatorMiddleWare,
];

exports.updateDomainValidator = [
  check("id").isMongoId().withMessage("Invalid Domain ID Formate"),
  check("value").optional(),
  validatorMiddleWare,
];

exports.deleteDomainValidator = [
  check("id").isMongoId().withMessage("Invalid Domain ID Formate"),
  validatorMiddleWare,
];
