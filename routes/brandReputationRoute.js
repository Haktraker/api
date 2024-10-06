const express = require("express");
const auth = require("../services/authServices");
const {
  createBrandReputation,
  getBrandsReputation,
  getBrandReputation,
  updateBrandReputation,
  deleteBrandReputation,
} = require("../services/brandReputationServices");
const {
  getBrandReputationValidator,
  createBrandReputationsValidator,
  updateBrandReputationValidator,
  deleteBrandReputationValidator,
} = require("../utils/validators/brandReputationValidators");

const router = express.Router();

router.route("/").get(getBrandsReputation);
router.route("/:id").get(getBrandReputationValidator, getBrandReputation);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));

router
  .route("/:id")
  .patch(updateBrandReputationValidator, updateBrandReputation)
  .delete(deleteBrandReputationValidator, deleteBrandReputation);
router.route("/").post(createBrandReputationsValidator, createBrandReputation);
module.exports = router;
