const express = require("express");
const auth = require("../../services/authServices");
const {
  createAccountTakeover,
  getAccountTakeovers,
  getAccountTakeover,
  updateAccountTakeover,
  deleteAccountTakeover,
  uploadScreenshot,
} = require("../../services/Account_Take_Over/accountTakeoverServices");

const router = express.Router();

router.route("/").get(getAccountTakeovers);
router.route("/:id").get(getAccountTakeover);

router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(uploadScreenshot, updateAccountTakeover)
  .delete(deleteAccountTakeover);
router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(uploadScreenshot, createAccountTakeover);
module.exports = router;
