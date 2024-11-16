const express = require("express");
const auth = require("../../services/authServices");
const {
  createHighRiskUser,
  getHighRiskUsers,
  getHighRiskUser,
  updateHighRiskUser,
  deleteHighRiskUser,
} = require("../../services/User_Behavior/HighRiskUsersServices");

const router = express.Router();

router.route("/").get(getHighRiskUsers);
router.route("/:id").get(getHighRiskUser);

router.use(auth.protect);
router.use(auth.allowedTo("admin"));
router.route("/:id").patch(updateHighRiskUser).delete(deleteHighRiskUser);
router.route("/").post(createHighRiskUser);
module.exports = router;
