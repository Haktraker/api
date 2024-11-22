const express = require("express");
const auth = require("../../services/authServices");
const {
  createIncidentByCategory,
  getIncidentsByCategory,
  getIncidentByCategory,
  updateIncidentByCategory,
  deleteIncidentByCategory,
} = require("../../services/Business_Units_Security/IncidentsByCategoryServices");

const router = express.Router();

router.route("/").get(getIncidentsByCategory);
router.route("/:id").get(getIncidentByCategory);

router.use(auth.protect);
router.use(auth.allowedTo("admin", "user", "assetsAdmin"));
router
  .route("/:id")
  .patch(updateIncidentByCategory)
  .delete(deleteIncidentByCategory);
router.route("/").post(createIncidentByCategory);
module.exports = router;
