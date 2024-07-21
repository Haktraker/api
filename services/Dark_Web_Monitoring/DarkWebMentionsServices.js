const DarkWebMentions = require("../../models/Dark_Web_Monitoring/DarkWebMentions");
const factory = require("../handlersFactory");

// @desc      Create DarkWebMentions
// @route     POST /api/dark-web-monitoring/DarkWebMentions
// @access    private
exports.createDarkWebMentions = factory.create(DarkWebMentions);

// @desc      Get Specific DarkWebMentions by id
// @route     GET /api/dark-web-monitoring/DarkWebMentions/:id
// @access    Public
exports.getDarkWebMention = factory.getOne(DarkWebMentions);

// @desc      Get List Of DarkWebMentions
// @route     GET /api/dark-web-monitoring/DarkWebMentions
// @access    Public
exports.getDarkWebMentions = factory.getAll(DarkWebMentions);

// @desc      Update DarkWebMentions
// @route     PATCH /api/dark-web-monitoring/DarkWebMentions/:id
// @access    private
exports.updateDarkWebMention = factory.updateOne(DarkWebMentions);

// @desc      Delete DarkWebMentions
// @route     DELETE /api/dark-web-monitoring/DarkWebMentions/:id
// @access    private

exports.deleteDarkWebMention = factory.deleteOne(DarkWebMentions);
