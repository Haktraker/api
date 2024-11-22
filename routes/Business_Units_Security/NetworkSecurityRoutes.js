const express = require("express");
const auth = require("../../services/authServices");
const {
  createNetworkSecurity,
  getNetworkSecuritys,
  getNetworkSecurity,
  updateNetworkSecurity,
  deleteNetworkSecurity,
} = require("../../services/Business_Units_Security/NetworkSecurityServices");

const router = express.Router();

router.route("/").get(getNetworkSecuritys);
router.route("/:id").get(getNetworkSecurity);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateNetworkSecurity)
  .delete(deleteNetworkSecurity);
router.route("/").post(createNetworkSecurity);
module.exports = router;
