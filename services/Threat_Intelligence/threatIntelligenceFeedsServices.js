const ThreatIntelligenceFeeds = require("../../models/Threat_Intelligence/ThreatIntelligenceFeeds");
const factory = require("../handlersFactory");

// @desc      Create ThreatIntelligenceFeeds
// @route     POST /api/threat_intelligence/threatIntelligenceFeeds
// @access    private
exports.createThreatIntelligenceFeeds = factory.create(ThreatIntelligenceFeeds);

// @desc      Get Specific APTFeed by id
// @route     GET /api/threat_intelligence/threatIntelligenceFeeds/:id
// @access    Public
exports.getThreatIntelligenceFeed = factory.getOne(ThreatIntelligenceFeeds);

// @desc      Get List Of ThreatIntelligenceFeeds
// @route     GET /api/threat_intelligence/threatIntelligenceFeeds
// @access    Public
exports.getThreatIntelligenceFeeds = factory.getAll(ThreatIntelligenceFeeds);

// @desc      Update APTFeed
// @route     PATCH /api/threat_intelligence/threatIntelligenceFeeds/:id
// @access    private
exports.updateThreatIntelligenceFeed = factory.updateOne(
  ThreatIntelligenceFeeds
);

// @desc      Delete APTFeed
// @route     DELETE /api/threat_intelligence/threatIntelligenceFeeds/:id
// @access    private

exports.deleteThreatIntelligenceFeed = factory.deleteOne(
  ThreatIntelligenceFeeds
);
