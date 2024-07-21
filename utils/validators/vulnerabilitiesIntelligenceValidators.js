const { check } = require("express-validator");
const validatorMiddleWare = require("../../middlewares/validatorMiddleWare");

exports.getVulnerabilitiesIntelligenceValidator = [
  check("id")
    .isMongoId()
    .withMessage("Invalid Vulnerabilities Intelligences ID Formate"),
  validatorMiddleWare,
];

exports.createVulnerabilitiesIntelligencesValidator = [
  check("vulnerabilityID")
    .notEmpty()
    .withMessage("Vulnerabilities Intelligence vulnerabilityID required"),
  check("description")
    .notEmpty()
    .withMessage("Vulnerabilities Intelligence description required"),
  check("severity")
    .notEmpty()
    .withMessage("Vulnerabilities Intelligence severity required"),
  check("affectedSystems")
    .notEmpty()
    .withMessage("Vulnerabilities Intelligence affectedSystems required"),
  check("impact")
    .notEmpty()
    .withMessage("Vulnerabilities Intelligence impact required"),
  check("cvsScore")
    .notEmpty()
    .withMessage("Vulnerabilities Intelligence CVs Score required"),
  check("exploitAvailability")
    .notEmpty()
    .withMessage("Vulnerabilities Intelligence exploit Availability required"),
  check("patchAvailability")
    .notEmpty()
    .withMessage("Vulnerabilities Intelligence patch Availability required"),
  check("vendor")
    .notEmpty()
    .withMessage("Vulnerabilities Intelligence vendor required"),
  check("mitigationSteps")
    .notEmpty()
    .withMessage("Vulnerabilities Intelligence mitigation Steps required"),
  check("status")
    .notEmpty()
    .withMessage("Vulnerabilities Intelligence status required"),
  check("references")
    .notEmpty()
    .withMessage("Vulnerabilities Intelligence references required"),
  validatorMiddleWare,
];

exports.updateVulnerabilitiesIntelligenceValidator = [
  check("id")
    .isMongoId()
    .withMessage("Invalid Vulnerabilities Intelligences ID Formate"),
  validatorMiddleWare,
];

exports.deleteVulnerabilitiesIntelligenceValidator = [
  check("id")
    .isMongoId()
    .withMessage("Invalid Vulnerabilities Intelligences ID Formate"),
  validatorMiddleWare,
];
