const { check } = require("express-validator");
const validatorMiddleWare = require("../../../middlewares/validatorMiddleWare");

exports.getThreatIntelligenceFeedValidator = [
  check("id").isMongoId().withMessage("Invalid Threat Intelligence ID Formate"),
  validatorMiddleWare,
];

exports.createThreatIntelligenceFeedsValidator = [
  check("threatType")
    .notEmpty()
    .withMessage("Threat Intelligence threat Type Required"),
  check("severity")
    .notEmpty()
    .withMessage("Threat Intelligence severity Required"),
  check("source").notEmpty().withMessage("Threat Intelligence source Required"),
  check("description")
    .notEmpty()
    .withMessage("Threat Intelligence description Required"),
  validatorMiddleWare,
];

exports.updateThreatIntelligenceFeedValidator = [
  check("id").isMongoId().withMessage("Invalid Threat Intelligence ID Formate"),
  validatorMiddleWare,
];

exports.deleteThreatIntelligenceFeedValidator = [
  check("id").isMongoId().withMessage("Invalid Threat Intelligence ID Formate"),
  validatorMiddleWare,
];
