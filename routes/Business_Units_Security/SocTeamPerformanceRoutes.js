const express = require("express");
const auth = require("../../services/authServices");
const {
  createSocTeamPerformance,
  getSocTeamPerformances,
  getSocTeamPerformance,
  updateSocTeamPerformance,
  deleteSocTeamPerformance,
} = require("../../services/Business_Units_Security/SocTeamPerformanceServices");

const router = express.Router();

router.route("/").get(getSocTeamPerformances);
router.route("/:id").get(getSocTeamPerformance);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateSocTeamPerformance)
  .delete(deleteSocTeamPerformance);
router.route("/").post(createSocTeamPerformance);
module.exports = router;
