const { check } = require("express-validator");
const validatorMiddleWare = require("../../../middlewares/validatorMiddleWare");

exports.getAPTFeedValidator = [
  check("id").isMongoId().withMessage("Invalid APTFeed ID Formate"),
  validatorMiddleWare,
];

exports.createAPTFeedsValidator = [
  check("aptGroupName")
    .notEmpty()
    .withMessage("APTFeed apt Group Name Required"),
  check("threatType").notEmpty().withMessage("APTFeed threat Type Required"),
  check("ttps").notEmpty().withMessage("APTFeed ttps Required"),
  check("targetSectors")
    .notEmpty()
    .withMessage("APTFeed target Sectors Required"),
  check("geographicFocus")
    .notEmpty()
    .withMessage("APTFeed geographic Focus Required"),
  check("iocs").notEmpty().withMessage("APTFeed iocs Required"),
  check("source").notEmpty().withMessage("APTFeed source Required"),
  check("description").notEmpty().withMessage("APTFeed description Required"),
  validatorMiddleWare,
];

exports.updateAPTFeedValidator = [
  check("id").isMongoId().withMessage("Invalid APTFeed ID Formate"),
  validatorMiddleWare,
];

exports.deleteAPTFeedValidator = [
  check("id").isMongoId().withMessage("Invalid APTFeed ID Formate"),
  validatorMiddleWare,
];
