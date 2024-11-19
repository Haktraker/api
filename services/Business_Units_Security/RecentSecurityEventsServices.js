const RecentSecurityEvents = require("../../models/Business_Units_Security/RecentSecurityEvents");
const factory = require("../handlersFactory");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create RecentSecurityEvents
// @route     POST /api/bu-security/recent-security-events
// @access    private
exports.createRecentSecurityEvent = factory.create(RecentSecurityEvents);

// @desc      Get Specific RecentSecurityEvents by id
// @route     GET /api/bu-security/recent-security-events/:id
// @access    Public
exports.getRecentSecurityEvent = factory.getOne(RecentSecurityEvents);

// @desc      Get List Of RecentSecurityEvents
// @route     GET /api/bu-security/recent-security-events
// @access    Public
exports.getRecentSecurityEvents = factory.getAll(RecentSecurityEvents);

// @desc      Update RecentSecurityEvents
// @route     PATCH /api/bu-security/recent-security-events/:id
// @access    private
exports.updateRecentSecurityEvent = factory.updateOne(RecentSecurityEvents);

// @desc      Delete RecentSecurityEvents
// @route     DELETE /api/bu-security/recent-security-events/:id
// @access    private

exports.deleteRecentSecurityEvent = factory.deleteOne(RecentSecurityEvents);
