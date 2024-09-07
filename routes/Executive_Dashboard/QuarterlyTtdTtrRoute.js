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

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getQuarterlyTtdTtr);
router.route("/").post(createQuarterlyTtdTtr);
router.route("/:id").patch(updateQuarterlyTtdTtr).delete(deleteQuarterlyTtdTtr);
module.exports = router;
