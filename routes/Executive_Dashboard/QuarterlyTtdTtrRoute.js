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

router.route("/").get(getQuarterlyTtdTtrs);
router.route("/:id").get(getQuarterlyTtdTtr);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));

router.route("/:id").patch(updateQuarterlyTtdTtr).delete(deleteQuarterlyTtdTtr);
router.route("/").post(createQuarterlyTtdTtr);
module.exports = router;
