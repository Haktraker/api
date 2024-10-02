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

router.route("/").get(getQuarterlyCyberSecurityTrends);
router.route("/:id").get(getQuarterlyCyberSecurityTrend);

router.use(auth.allowedTo("admin"));

router
  .route("/:id")
  .patch(updateQuarterlyCyberSecurityTrends)
  .delete(deleteQuarterlyCyberSecurityTrends);
router.route("/").post(createQuarterlyCyberSecurityTrends);
module.exports = router;
