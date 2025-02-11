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

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router.route("/:id").patch(updateAccountTakeover).delete(deleteAccountTakeover);
router.use(auth.allowedTo("admin"));
router.route("/").post(createAccountTakeover);
module.exports = router;
