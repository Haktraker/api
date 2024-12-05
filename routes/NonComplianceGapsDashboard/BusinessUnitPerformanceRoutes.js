const express = require("express");
const auth = require("../../services/authServices");
const {
  createBusinessUnitPerformance,
  getBusinessUnitPerformances,
  getBusinessUnitPerformance,
  updateBusinessUnitPerformance,
  deleteBusinessUnitPerformance,
} = require("../../services/NonComplianceGapsDashboard/BusinessUnitPerformanceServices");

const router = express.Router();

router.route("/").get(getBusinessUnitPerformances);
router.route("/:id").get(getBusinessUnitPerformance);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateBusinessUnitPerformance)
  .delete(deleteBusinessUnitPerformance);
router.route("/").post(createBusinessUnitPerformance);
module.exports = router;
