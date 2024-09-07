const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyCyberSecurityTrends,
  getQuarterlyCyberSecurityTrend,
  getQuarterlyCyberSecurityTrends,
  updateQuarterlyCyberSecurityTrends,
  deleteQuarterlyCyberSecurityTrends,
} = require("../../services/Executive_Dashboard/QuarterlyCyberSecurityTrendsServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getQuarterlyCyberSecurityTrends);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getQuarterlyCyberSecurityTrend);
router.route("/").post(createQuarterlyCyberSecurityTrends);
router
  .route("/:id")
  .patch(updateQuarterlyCyberSecurityTrends)
  .delete(deleteQuarterlyCyberSecurityTrends);
module.exports = router;
