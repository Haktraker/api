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

router.route("/:id").get(getReportTtdTtr);
router.use(auth.protect, auth.allowedTo("admin", "user"));
router.route("/:id").patch(updateReportTtdTtr).delete(deleteReportTtdTtr);
router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createReportTtdTtr);
module.exports = router;
