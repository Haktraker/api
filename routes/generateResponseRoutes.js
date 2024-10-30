const express = require("express");
const { generateResponse } = require("./../services/handlersFactory");
const router = express.Router();
router.route("/chat").post(generateResponse);
module.exports = router;
