const express = require("express");
const auth = require("../services/authServices");
// Services
const {
  signup,
  login,
  verifyPasswordResetCode,
  fogotPassword,
  resetPassword,
  changePassword,
} = require("../services/authServices");

// Validators
const {
  signUpValidator,
  loginValidator,
  changePasswordValidator,
} = require("../utils/validators/authValidators");

const router = express.Router();

router.post("/signup", signUpValidator, signup);
router.route("/login").post(loginValidator, login);
router
  .route("/change-password")
  .post(auth.protect, changePasswordValidator, changePassword);
router.post("/forgot-password", fogotPassword);
router.post("/reset-code", verifyPasswordResetCode);
router.patch("/reset-password", resetPassword);

module.exports = router;
