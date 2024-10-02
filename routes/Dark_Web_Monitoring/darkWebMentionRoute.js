const express = require("express");
const auth = require("../../services/authServices");
const {
  createDarkWebMentions,
  getDarkWebMentions,
  getDarkWebMention,
  updateDarkWebMention,
  deleteDarkWebMention,
} = require("../../services/Dark_Web_Monitoring/DarkWebMentionsServices");
const {
  getDarkWebMentionValidator,
  createDarkWebMentionsValidator,
  updateDarkWebMentionValidator,
  deleteDarkWebMentionValidator,
} = require("../../utils/validators/Dark_Web_Monitoring/DarkWebMentionsValidator");

const router = express.Router();
router.use(auth.protect);
router.route("/").get(getDarkWebMentions);
router.route("/:id").get(getDarkWebMentionValidator, getDarkWebMention);

router.use(auth.allowedTo("admin"));
router
  .route("/:id")
  .patch(updateDarkWebMentionValidator, updateDarkWebMention)
  .delete(deleteDarkWebMentionValidator, deleteDarkWebMention);
router.route("/").post(createDarkWebMentionsValidator, createDarkWebMentions);
module.exports = router;
