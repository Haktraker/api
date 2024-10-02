const express = require("express");
const auth = require("../../services/authServices");
const {
  createleakedCredentials,
  getleakedCredentials,
  getleakedCredential,
  updateleakedCredential,
  deleteleakedCredential,
} = require("../../services/Dark_Web_Monitoring/LeakedCredentialsServices");
const {
  getleakedCredentialValidator,
  createleakedCredentialsValidator,
  updateleakedCredentialValidator,
  deleteleakedCredentialValidator,
} = require("../../utils/validators/Dark_Web_Monitoring/LeakedCredentialsValidator");

const router = express.Router();

router.route("/").get(getleakedCredentials);
router.route("/:id").get(getleakedCredential);

router.use(auth.protect, auth.allowedTo("admin", "user"));

router
  .route("/:id")
  .patch(updateleakedCredential)
  .delete(deleteleakedCredentialValidator, deleteleakedCredential);
router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createleakedCredentials);
module.exports = router;
