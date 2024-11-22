const express = require("express");
const auth = require("../../services/authServices");
const {
  createAlertTypeDistribution,
  getAlertTypesDistribution,
  getAlertTypeDistribution,
  updateAlertTypeDistribution,
  deleteAlertTypeDistribution,
} = require("../../services/Business_Units_Security/AlertTypeDistributionServices");

const router = express.Router();

router.route("/").get(getAlertTypesDistribution);
router.route("/:id").get(getAlertTypeDistribution);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateAlertTypeDistribution)
  .delete(deleteAlertTypeDistribution);
router.route("/").post(createAlertTypeDistribution);
module.exports = router;
