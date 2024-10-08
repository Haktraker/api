const express = require("express");
const auth = require("../../services/authServices");
const {
  createip,
  getips,
  getip,
  updateip,
  deleteip,
} = require("../../services/assets/ipServices");
const {
  getipValidator,
  createipValidator,
  updateipValidator,
  deleteipValidator,
} = require("../../utils/validators/assets/ipValidator");

const router = express.Router();

router.route("/").get(getips);
router.route("/:id").get(getipValidator, getip);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateipValidator, updateip)
  .delete(deleteipValidator, deleteip);
router.use(auth.allowedTo("admin", "assetsAdmin"));
router.route("/").post(createipValidator, createip);
module.exports = router;
