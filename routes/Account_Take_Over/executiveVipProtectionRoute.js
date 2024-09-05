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

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(uploadScreenshot, createExecutiveVipProtection);
router
  .route("/:id")
  .patch(uploadScreenshot, updateExecutiveVipProtection)
  .delete(deleteExecutiveVipProtection);
module.exports = router;
