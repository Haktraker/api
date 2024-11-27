const express = require("express");
const auth = require("../../services/authServices");
const {
  createSecurityBreachIndicatorsScore,
  getSecurityBreachIndicatorsScores,
  getSecurityBreachIndicatorsScore,
  updateSecurityBreachIndicatorsScore,
  deleteSecurityBreachIndicatorsScore,
} = require("../../services/SecurityBreachIndicatorsDashboard/SecurityBreachIndicatorsScoresServices");

const router = express.Router();

router.route("/").get(getSecurityBreachIndicatorsScores);
router.route("/:id").get(getSecurityBreachIndicatorsScore);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateSecurityBreachIndicatorsScore)
  .delete(deleteSecurityBreachIndicatorsScore);
router.route("/").post(createSecurityBreachIndicatorsScore);
module.exports = router;
