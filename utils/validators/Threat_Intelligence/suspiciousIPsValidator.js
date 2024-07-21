const { check } = require("express-validator");
const validatorMiddleWare = require("../../../middlewares/validatorMiddleWare");

exports.getSuspiciousIPValidator = [
  check("id").isMongoId().withMessage("Invalid SuspiciousIPs ID Formate"),
  validatorMiddleWare,
];

exports.createSuspiciousIPsValidator = [
  check("value").notEmpty().withMessage("SuspiciousIPs value Required"),
  check("source").notEmpty().withMessage("SuspiciousIPs source Required"),
  check("description")
    .notEmpty()
    .withMessage("SuspiciousIPs description Required"),
  validatorMiddleWare,
];

exports.updateSuspiciousIPValidator = [
  check("id").isMongoId().withMessage("Invalid SuspiciousIPs ID Formate"),
  validatorMiddleWare,
];

exports.deleteSuspiciousIPValidator = [
  check("id").isMongoId().withMessage("Invalid SuspiciousIPs ID Formate"),
  validatorMiddleWare,
];
