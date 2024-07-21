const express = require("express");
const auth = require("../../services/authServices");
const {
  createIocs,
  getIocs,
  getIoc,
  updateIoc,
  deleteIoc,
} = require("../../services/Threat_Intelligence/iocsServices");
const {
  getIocValidator,
  createIocsValidator,
  updateIocValidator,
  deleteIocValidator,
} = require("../../utils/validators/Threat_Intelligence/iocsValidator");

const router = express.Router();

router.route("/").get(getIocs);
router.route("/:id").get(getIocValidator, getIoc);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createIocsValidator, createIocs);
router
  .route("/:id")
  .patch(updateIocValidator, updateIoc)
  .delete(deleteIocValidator, deleteIoc);
module.exports = router;
