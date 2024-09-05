const express = require("express");
const auth = require("../../services/authServices");
const {
  createCyberSecurityTrends,
  getCyberSecurityTrendss,
  getCyberSecurityTrends,
  updateCyberSecurityTrends,
  deleteCyberSecurityTrends,
} = require("../../services/Executive_Dashboard/CyberSecurityTrendsServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getCyberSecurityTrendss);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getCyberSecurityTrends);
router.route("/").post(createCyberSecurityTrends);
router
  .route("/:id")
  .patch(updateCyberSecurityTrends)
  .delete(deleteCyberSecurityTrends);
module.exports = router;
