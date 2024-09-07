const QuarterlyTtdTtr = require("../../models/Executive_Dashboard/QuarterlyTtdTtr");
const factory = require("../handlersFactory");

// @desc      Create Quarterly TtdTtr
// @route     POST /api/executive-dashboard/ttd-ttr
// @access    private
exports.createQuarterlyTtdTtr = factory.create(QuarterlyTtdTtr);

// @desc      Get Specific Quarterly TtdTtr by id
// @route     GET /api/executive-dashboard/ttd-ttr/:id
// @access    Public
exports.getQuarterlyTtdTtr = factory.getOne(QuarterlyTtdTtr);

// @desc      Get List Of Quarterly TtdTtr
// @route     GET /api/executive-dashboard/ttd-ttr
// @access    Public
exports.getQuarterlyTtdTtrs = factory.getAll(QuarterlyTtdTtr);

// @desc      Update Quarterly TtdTtr
// @route     PATCH /api/executive-dashboard/ttd-ttr/:id
// @access    private
exports.updateQuarterlyTtdTtr = factory.updateOne(QuarterlyTtdTtr);

// @desc      Delete Quarterly TtdTtr
// @route     DELETE /api/executive-dashboard/ttd-ttr/:id
// @access    private

exports.deleteQuarterlyTtdTtr = factory.deleteOne(QuarterlyTtdTtr);
