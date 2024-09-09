const express = require("express");
const auth = require("../../services/authServices");
const {
  createImpersonation,
  getImpersonation,
  getImpersonations,
  updateImpersonation,
  deleteImpersonation,
  uploadScreenshot,
} = require("../../services/Account_Take_Over/impersonationServices");

const router = express.Router();

router.route("/").get(getImpersonations);
router.route("/:id").get(getImpersonation);

router.use(auth.protect, auth.allowedTo("admin", "user"));
router
  .route("/:id")
  .patch(uploadScreenshot, updateImpersonation)
  .delete(deleteImpersonation);
router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(uploadScreenshot, createImpersonation);
module.exports = router;
