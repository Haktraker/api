const express = require("express");
const auth = require("../../services/authServices");
const {
  createControlCategoryPerformance,
  getControlCategoryPerformances,
  getControlCategoryPerformance,
  updateControlCategoryPerformance,
  deleteControlCategoryPerformance,
} = require("../../services/NonComplianceGapsDashboard/ControlCategoryPerformanceServices");

const router = express.Router();

router.route("/").get(getControlCategoryPerformances);
router.route("/:id").get(getControlCategoryPerformance);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateControlCategoryPerformance)
  .delete(deleteControlCategoryPerformance);
router.route("/").post(createControlCategoryPerformance);
module.exports = router;
