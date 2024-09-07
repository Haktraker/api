const express = require("express");
const auth = require("../../services/authServices");
const {
  createReportTtdTtr,
  getReportTtdTtrs,
  getReportTtdTtr,
  updateReportTtdTtr,
  deleteReportTtdTtr,
} = require("../../services/Reports/ReportTtdTtrServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getReportTtdTtrs);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getReportTtdTtr);
router.route("/").post(createReportTtdTtr);
router.route("/:id").patch(updateReportTtdTtr).delete(deleteReportTtdTtr);
module.exports = router;
