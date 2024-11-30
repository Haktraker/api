const express = require("express");
const auth = require("../../services/authServices");
const {
  createSecurityIssue,
  getSecurityIssues,
  getSecurityIssue,
  updateSecurityIssue,
  deleteSecurityIssue,
} = require("../../services/SecurityBreachIndicatorsDashboard/SecurityIssueServices");

const router = express.Router();

router.route("/").get(getSecurityIssues);
router.route("/:id").get(getSecurityIssue);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router.route("/:id").patch(updateSecurityIssue).delete(deleteSecurityIssue);
router.route("/").post(createSecurityIssue);
module.exports = router;
