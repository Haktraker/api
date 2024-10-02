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
  deleteleakedCredentialValidator,
} = require("../../utils/validators/Dark_Web_Monitoring/LeakedCredentialsValidator");

const router = express.Router();
router.use(auth.protect);

router.route("/").get(getleakedCredentials);
router.route("/:id").get(getleakedCredential);

router.use(auth.allowedTo("admin"));
router
  .route("/:id")
  .patch(updateleakedCredential)
  .delete(deleteleakedCredentialValidator, deleteleakedCredential);

router.route("/").post(createleakedCredentials);
module.exports = router;
