const express = require("express");
const auth = require("../../services/authServices");
const {
  createTtdTtr,
  getTtdTtrs,
  getTtdTtr,
  updateTtdTtr,
  deleteTtdTtr,
} = require("../../services/Executive_Dashboard/TtdTtrServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getTtdTtrs);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getTtdTtr);
router.route("/").post(createTtdTtr);
router.route("/:id").patch(updateTtdTtr).delete(deleteTtdTtr);
module.exports = router;
