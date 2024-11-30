const express = require("express");
const auth = require("../../services/authServices");
const {
  createMttrMttcMttm,
  getMttrMttcMttms,
  getMttrMttcMttm,
  updateMttrMttcMttm,
  deleteMttrMttcMttm,
} = require("../../services/SecurityBreachIndicatorsDashboard/MttrMttcMttmServices");

const router = express.Router();

router.route("/").get(getMttrMttcMttms);
router.route("/:id").get(getMttrMttcMttm);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateMttrMttcMttm)
  .delete(deleteMttrMttcMttm);
router.route("/").post(createMttrMttcMttm);
module.exports = router;
