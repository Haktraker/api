const express = require("express");
const auth = require("../services/authServices");
const {
  createAttackSurface,
  getAttackSurfaces,
  getAttackSurface,
  updateAttackSurface,
  deleteAttackSurface,
  uploadScreenshot,
} = require("../services/attackSurfaceServices");
const {
  getAttackSurfaceValidator,
  createAttackSurfacesValidator,
  updateAttackSurfaceValidator,
  deleteAttackSurfaceValidator,
} = require("../utils/validators/attackSurfaceValidators");

const router = express.Router();

router.route("/").get(getAttackSurfaces);
router.route("/:id").get(getAttackSurface);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router.route("/:id").patch(updateAttackSurface).delete(deleteAttackSurface);
router.route("/").post(createAttackSurface);
module.exports = router;
