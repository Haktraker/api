const APTFeeds = require("../../models/Threat_Intelligence/APTFeeds");
const factory = require("../handlersFactory");

// @desc      Create APTFeeds
// @route     POST /api/threat_intelligence/aptfeeds
// @access    private
exports.createAPTFeeds = factory.create(APTFeeds);

// @desc      Get Specific APTFeed by id
// @route     GET /api/threat_intelligence/aptfeeds/:id
// @access    Public
exports.getAPTFeed = factory.getOne(APTFeeds);

// @desc      Get List Of APTFeeds
// @route     GET /api/threat_intelligence/aptfeeds
// @access    Public
exports.getAPTFeeds = factory.getAll(APTFeeds);

// @desc      Update APTFeed
// @route     PATCH /api/threat_intelligence/aptfeeds/:id
// @access    private
exports.updateAPTFeed = factory.updateOne(APTFeeds);

// @desc      Delete APTFeed
// @route     DELETE /api/threat_intelligence/aptfeeds/:id
// @access    private

exports.deleteAPTFeed = factory.deleteOne(APTFeeds);
