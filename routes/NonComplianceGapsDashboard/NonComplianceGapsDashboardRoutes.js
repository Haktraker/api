const express = require("express");
const auth = require("../../services/authServices");
const {
  createComplianceGapsByFrameWrok,
  getComplianceGapsByFrameWroks,
  getComplianceGapsByFrameWrok,
  updateComplianceGapsByFrameWrok,
  deleteComplianceGapsByFrameWrok,
} = require("../../services/NonComplianceGapsDashboard/ComplianceGapsByFrameWrokServices");

const router = express.Router();

router.route("/").get(getComplianceGapsByFrameWroks);
router.route("/:id").get(getComplianceGapsByFrameWrok);
    
router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateComplianceGapsByFrameWrok)
  .delete(deleteComplianceGapsByFrameWrok);
router.route("/").post(createComplianceGapsByFrameWrok);
module.exports = router;
