const express = require("express");
const auth = require("../../services/authServices");
const {
  createFrameWorkInfo,
  getFrameWorkInfos,
  getFrameWorkInfo,
  updateFrameWorkInfo,
  deleteFrameWorkInfo,
} = require("../../services/NonComplianceGapsDashboard/FrameWorkInfoServices");

const router = express.Router();

router.route("/").get(getFrameWorkInfos);
router.route("/:id").get(getFrameWorkInfo);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateFrameWorkInfo)
  .delete(deleteFrameWorkInfo);
router.route("/").post(createFrameWorkInfo);
module.exports = router;
