const express = require("express");
const auth = require("../../services/authServices");
const {
  createVulnerabilitiesAndPatched,
  getVulnerabilitiesAndPatcheds,
  getVulnerabilitiesAndPatched,
  updateVulnerabilitiesAndPatched,
  deleteVulnerabilitiesAndPatched,
} = require("../../services/Business_Units_Security/VulnerabilitiesAndPatchedServices");

const router = express.Router();

router.route("/").get(getVulnerabilitiesAndPatcheds);
router.route("/:id").get(getVulnerabilitiesAndPatched);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateVulnerabilitiesAndPatched)
  .delete(deleteVulnerabilitiesAndPatched);
router.route("/").post(createVulnerabilitiesAndPatched);
module.exports = router;
