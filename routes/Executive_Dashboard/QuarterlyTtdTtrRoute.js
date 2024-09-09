const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyTtdTtr,
  getQuarterlyTtdTtrs,
  getQuarterlyTtdTtr,
  updateQuarterlyTtdTtr,
  deleteQuarterlyTtdTtr,
} = require("../../services/Executive_Dashboard/QuarterlyTtdTtrServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getQuarterlyTtdTtrs);

router.route("/:id").get(getQuarterlyTtdTtr);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router.route("/:id").patch(updateQuarterlyTtdTtr).delete(deleteQuarterlyTtdTtr);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createQuarterlyTtdTtr);
module.exports = router;
