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

router.route("/").get(getReportTtdTtrs);
router.route("/:id").get(getReportTtdTtr);

router.use(auth.allowedTo("admin"));

router.route("/:id").patch(updateReportTtdTtr).delete(deleteReportTtdTtr);
router.route("/").post(createReportTtdTtr);
module.exports = router;
