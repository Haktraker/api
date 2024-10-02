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
router.use(auth.protect);
router.route("/").get(getExecutiveVipProtections);
router.route("/:id").get(getExecutiveVipProtection);

router.use(auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(uploadScreenshot, updateExecutiveVipProtection)
  .delete(deleteExecutiveVipProtection);
router.use(auth.allowedTo("admin"));
router.route("/").post(uploadScreenshot, createExecutiveVipProtection);
module.exports = router;
