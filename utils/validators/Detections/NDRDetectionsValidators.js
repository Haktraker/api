const { check } = require("express-validator");
const validatorMiddleWare = require("../../../middlewares/validatorMiddleWare");

exports.getNDRDetectionValidator = [
  check("id").isMongoId().withMessage("Invalid AttackSurface ID Formate"),
  validatorMiddleWare,
];

exports.createNDRDetectionssValidator = [
  check("detectionTime")
    .notEmpty()
    .withMessage("NDRDetection detectionTime required"),
  check("alertID").notEmpty().withMessage("NDRDetection alertID required"),
  check("threatType")
    .notEmpty()
    .withMessage("NDRDetection threat Type required"),
  check("severity").notEmpty().withMessage("NDRDetection severity required"),
  check("bu").notEmpty().withMessage("NDRDetection bu required"),
  check("sourceIP").notEmpty().withMessage("NDRDetection source IP required"),
  check("destinationIP")
    .notEmpty()
    .withMessage("NDRDetection destination IP required"),
  check("sourcePort")
    .notEmpty()
    .withMessage("NDRDetection source Port required"),
  check("destinationPort")
    .notEmpty()
    .withMessage("NDRDetection destination Port required"),
  check("description")
    .notEmpty()
    .withMessage("NDRDetection description required"),
  check("actionTaken")
    .notEmpty()
    .withMessage("NDRDetection action Taken required"),
  check("mitigationSteps")
    .notEmpty()
    .withMessage("NDRDetection mitigation Steps required"),
  validatorMiddleWare,
];

exports.updateNDRDetectionValidator = [
  check("id").isMongoId().withMessage("Invalid NDRDetection ID Formate"),
  validatorMiddleWare,
];

exports.deleteNDRDetectionValidator = [
  check("id").isMongoId().withMessage("Invalid NDRDetection ID Formate"),
  validatorMiddleWare,
];
