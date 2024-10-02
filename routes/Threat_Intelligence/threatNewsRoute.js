const express = require("express");
const auth = require("../../services/authServices");
const {
  createThreatNews,
  getThreatNews,
  getThreatOneNews,
  updateThreatNews,
  deleteThreatNews,
} = require("../../services/Threat_Intelligence/threatNewsServices");

const router = express.Router();
router.use(auth.protect);
router.route("/").get(getThreatNews);
router.route("/:id").get(getThreatOneNews);
router.use(auth.allowedTo("admin"));

router.route("/").post(createThreatNews);
router.route("/:id").patch(updateThreatNews).delete(deleteThreatNews);
module.exports = router;
