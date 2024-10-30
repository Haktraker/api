const express = require("express");
const auth = require("../../services/authServices");
const {
  createKillChainTable,
  getKillChainTable,
  getKillChainTables,
  updateKillChainTable,
  deleteKillChainTable,
} = require("../../services/Reports/ReportKillChainServices");

const router = express.Router();

router.use(auth.protect);

router.route("/").get(getKillChainTables);
router.route("/:id").get(getKillChainTable);

router.use(auth.allowedTo("admin"));

router.route("/:id").patch(updateKillChainTable).delete(deleteKillChainTable);
router.route("/").post(createKillChainTable);
module.exports = router;
