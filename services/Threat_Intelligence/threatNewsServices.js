const ThreatNews = require("../../models/Threat_Intelligence/ThreatNews");
const factory = require("../handlersFactory");

// @desc      Create ThreatNews
// @route     POST /api/threat_intelligence/threat-news
// @access    private
exports.createThreatNews = factory.create(ThreatNews);

// @desc      Get Specific APTFeed by id
// @route     GET /api/threat_intelligence/threat-news/:id
// @access    Public
exports.getThreatOneNews = factory.getOne(ThreatNews);

// @desc      Get List Of ThreatNews
// @route     GET /api/threat_intelligence/threat-news
// @access    Public
exports.getThreatNews = factory.getAll(ThreatNews);

// @desc      Update APTFeed
// @route     PATCH /api/threat_intelligence/threat-news/:id
// @access    private
exports.updateThreatNews = factory.updateOne(ThreatNews);

// @desc      Delete APTFeed
// @route     DELETE /api/threat_intelligence/threat-news/:id
// @access    private

exports.deleteThreatNews = factory.deleteOne(ThreatNews);
