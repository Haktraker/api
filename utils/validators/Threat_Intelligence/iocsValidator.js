const { check } = require("express-validator");
const validatorMiddleWare = require("../../../middlewares/validatorMiddleWare");

exports.getIocValidator = [
  check("id").isMongoId().withMessage("Invalid Ioc ID Formate"),
  validatorMiddleWare,
];

exports.createIocsValidator = [
  check("iOCType").notEmpty().withMessage("iOC Type Required"),
  check("indicatorValue")
    .notEmpty()
    .withMessage("Ioc indicator Value Required"),
  check("threatType").notEmpty().withMessage("Ioc threat Type Required"),
  check("source").notEmpty().withMessage("Ioc source Required"),
  check("description").notEmpty().withMessage("Ioc description Required"),
  validatorMiddleWare,
];

exports.updateIocValidator = [
  check("id").isMongoId().withMessage("Invalid Ioc ID Formate"),
  validatorMiddleWare,
];

exports.deleteIocValidator = [
  check("id").isMongoId().withMessage("Invalid Ioc ID Formate"),
  validatorMiddleWare,
];
