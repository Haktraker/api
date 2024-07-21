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
router.route("/:id").get(getAttackSurfaceValidator, getAttackSurface);

router.use(auth.protect, auth.allowedTo("admin"));

router
  .route("/")
  .post(uploadScreenshot, createAttackSurfacesValidator, createAttackSurface);
router
  .route("/:id")
  .patch(uploadScreenshot, updateAttackSurfaceValidator, updateAttackSurface)
  .delete(deleteAttackSurfaceValidator, deleteAttackSurface);
module.exports = router;
