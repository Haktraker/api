const express = require("express");
const auth = require("../../services/authServices");
const {
  createNetworkAnomalies,
  getNetworkAnomaliess,
  getNetworkAnomalies,
  updateNetworkAnomalies,
  deleteNetworkAnomalies,
} = require("../../services/SecurityBreachIndicatorsDashboard/NetworkAnomaliesServices");

const router = express.Router();

router.route("/").get(getNetworkAnomaliess);
router.route("/:id").get(getNetworkAnomalies);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router.route("/:id").patch(updateNetworkAnomalies).delete(deleteNetworkAnomalies);
router.route("/").post(createNetworkAnomalies);
module.exports = router;
