const { check } = require("express-validator");
const validatorMiddleWare = require("../../../middlewares/validatorMiddleWare");

exports.getEDRXDRDetectionValidator = [
  check("id").isMongoId().withMessage("Invalid AttackSurface ID Formate"),
  validatorMiddleWare,
];

exports.createEDRXDRDetectionssValidator = [
  check("detectionTime")
    .notEmpty()
    .withMessage("EDRXDRDetection detectionTime required"),
  check("alertID").notEmpty().withMessage("EDRXDRDetection alertID required"),
  check("threatType")
    .notEmpty()
    .withMessage("EDRXDRDetection threat Type required"),
  check("severity").notEmpty().withMessage("EDRXDRDetection severity required"),
  check("bu").notEmpty().withMessage("EDRXDRDetection bu required"),
  check("device").notEmpty().withMessage("EDRXDRDetection device required"),
  check("user").notEmpty().withMessage("EDRXDRDetection user required"),
  check("filePath")
    .notEmpty()
    .withMessage("EDRXDRDetection file Path required"),
  check("actionTaken")
    .notEmpty()
    .withMessage("EDRXDRDetection action Taken required"),
  check("mitigationSteps")
    .notEmpty()
    .withMessage("EDRXDRDetection mitigation Steps required"),
  validatorMiddleWare,
];

exports.updateEDRXDRDetectionValidator = [
  check("id").isMongoId().withMessage("Invalid EDRXDRDetection ID Formate"),
  validatorMiddleWare,
];

exports.deleteEDRXDRDetectionValidator = [
  check("id").isMongoId().withMessage("Invalid EDRXDRDetection ID Formate"),
  validatorMiddleWare,
];
