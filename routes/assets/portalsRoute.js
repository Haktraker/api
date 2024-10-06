const express = require("express");
const auth = require("../../services/authServices");
const {
  createportals,
  getportals,
  getportal,
  updateportals,
  deleteportals,
} = require("../../services/assets/portalsServices");
const {
  getportalValidator,
  createportalsValidator,
  updateportalsValidator,
  deleteportalsValidator,
} = require("../../utils/validators/assets/portalsValidator");

const router = express.Router();

router.route("/").get(getportals);
router.route("/:id").get(getportalValidator, getportal);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));

router
  .route("/:id")
  .patch(updateportalsValidator, updateportals)
  .delete(deleteportalsValidator, deleteportals);
router.use(auth.allowedTo("admin", "assetsAdmin"));
router.route("/").post(createportalsValidator, createportals);
module.exports = router;
