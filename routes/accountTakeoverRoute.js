const express = require("express");
const auth = require("../services/authServices");
const {
  createAccountTakeover,
  getAccountTakeovers,
  getAccountTakeover,
  updateAccountTakeover,
  deleteAccountTakeover,
  uploadScreenshot,
} = require("../services/accountTakeoverServices");
const {
  getAccountTakeOverValidator,
  createAccountTakeOversValidator,
  updateAccountTakeOverValidator,
  deleteAccountTakeOverValidator,
} = require("../utils/validators/accountTakeoverValidators");

const router = express.Router();

router.route("/").get(getAccountTakeovers);
router.route("/:id").get(getAccountTakeOverValidator, getAccountTakeover);

router.use(auth.protect, auth.allowedTo("admin"));

router
  .route("/")
  .post(
    uploadScreenshot,
    createAccountTakeOversValidator,
    createAccountTakeover
  );
router
  .route("/:id")
  .patch(
    uploadScreenshot,
    updateAccountTakeOverValidator,
    updateAccountTakeover
  )
  .delete(deleteAccountTakeOverValidator, deleteAccountTakeover);
module.exports = router;
