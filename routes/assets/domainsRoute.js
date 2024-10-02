const express = require("express");
const auth = require("../../services/authServices");
const {
  createDomain,
  getDomains,
  getDomain,
  updateDomain,
  deleteDomain,
} = require("../../services/assets/domainServices");
const {
  getDomainValidator,
  createDomainValidator,
  updateDomainValidator,
  deleteDomainValidator,
} = require("../../utils/validators/assets/domainValidator");

const router = express.Router();

router.route("/").get(getDomains);
router.route("/:id").get(getDomainValidator, getDomain);

router.use(auth.protect, auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateDomainValidator, updateDomain)
  .delete(deleteDomainValidator, deleteDomain);
router.use(auth.protect, auth.allowedTo("admin", "assetsAdmin"));
router.route("/").post(createDomainValidator, createDomain);
module.exports = router;
