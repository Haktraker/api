const express = require("express");
const auth = require("../../services/authServices");
const {
  createExecutiveVipProtection,
  getExecutiveVipProtection,
  getExecutiveVipProtections,
  updateExecutiveVipProtection,
  deleteExecutiveVipProtection,
  uploadScreenshot,
} = require("../../services/Account_Take_Over/executiveVipProtectionServices");

const router = express.Router();
router.route("/").get(getExecutiveVipProtections);
router.route("/:id").get(getExecutiveVipProtection);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateExecutiveVipProtection)
  .delete(deleteExecutiveVipProtection);
router.use(auth.allowedTo("admin"));
router.route("/").post(createExecutiveVipProtection);
module.exports = router;
