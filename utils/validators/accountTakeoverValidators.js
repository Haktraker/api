const { check } = require("express-validator");
const validatorMiddleWare = require("../../middlewares/validatorMiddleWare");

exports.getAccountTakeOverValidator = [
  check("id").isMongoId().withMessage("Invalid AccountTakeOver ID Formate"),
  validatorMiddleWare,
];

exports.createAccountTakeOversValidator = [
  check("user").notEmpty().withMessage("AccountTakeOver user Required"),
  check("password").notEmpty().withMessage("AccountTakeOver password Required"),
  check("url").notEmpty().withMessage("AccountTakeOver url Required"),
  check("mitigationSteps")
    .notEmpty()
    .withMessage("AccountTakeOver mitigationSteps Required"),
  check("source").notEmpty().withMessage("AccountTakeOver source Required"),
  check("bu").notEmpty().withMessage("Account Take Over Bu Required"),
  validatorMiddleWare,
];

exports.updateAccountTakeOverValidator = [
  check("id").isMongoId().withMessage("Invalid AccountTakeOver ID Formate"),
  validatorMiddleWare,
];

exports.deleteAccountTakeOverValidator = [
  check("id").isMongoId().withMessage("Invalid AccountTakeOver ID Formate"),
  validatorMiddleWare,
];
