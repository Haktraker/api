const SocTeamPerformance = require("../../models/Business_Units_Security/SocTeamPerformance");
const factory = require("../handlersFactory");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create SocTeamPerformance
// @route     POST /api/bu-security/soc-team-performance
// @access    private
exports.createSocTeamPerformance = factory.create(SocTeamPerformance);

// @desc      Get Specific SocTeamPerformance by id
// @route     GET /api/bu-security/soc-team-performance/:id
// @access    Public
exports.getSocTeamPerformance = factory.getOne(SocTeamPerformance);

// @desc      Get List Of SocTeamPerformance
// @route     GET /api/bu-security/soc-team-performance
// @access    Public
exports.getSocTeamPerformances = factory.getAll(SocTeamPerformance);

// @desc      Update SocTeamPerformance
// @route     PATCH /api/bu-security/soc-team-performance/:id
// @access    private
exports.updateSocTeamPerformance = factory.updateOne(SocTeamPerformance);

// @desc      Delete SocTeamPerformance
// @route     DELETE /api/bu-security/soc-team-performance/:id
// @access    private

exports.deleteSocTeamPerformance = factory.deleteOne(SocTeamPerformance);
