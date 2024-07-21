const { check } = require("express-validator");
const validatorMiddleWare = require("../../../middlewares/validatorMiddleWare");

exports.getDarkWebMentionValidator = [
  check("id").isMongoId().withMessage("Invalid DarkWebMention ID Formate"),
  validatorMiddleWare,
];

exports.createDarkWebMentionsValidator = [
  check("source").notEmpty().withMessage("DarkWebMention value Required"),
  check("mitigationSteps")
    .notEmpty()
    .withMessage("DarkWebMention location Required"),
  validatorMiddleWare,
];

exports.updateDarkWebMentionValidator = [
  check("id").isMongoId().withMessage("Invalid DarkWebMention ID Formate"),
  check("source").optional(),
  check("mitigationSteps").optional(),
  validatorMiddleWare,
];

exports.deleteDarkWebMentionValidator = [
  check("id").isMongoId().withMessage("Invalid DarkWebMention ID Formate"),
  validatorMiddleWare,
];
