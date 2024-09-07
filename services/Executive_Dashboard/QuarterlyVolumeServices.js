const QuarterlyVolume = require("../../models/Executive_Dashboard/QuarterlyVolume");
const factory = require("../handlersFactory");

// @desc      Create Quarterly TtdTtr
// @route     POST /api/executive-dashboard/ttd-ttr
// @access    private
exports.createQuarterlyVolume = factory.create(QuarterlyVolume);

// @desc      Get Specific Quarterly TtdTtr by id
// @route     GET /api/executive-dashboard/ttd-ttr/:id
// @access    Public
exports.getQuarterlyVolume = factory.getOne(QuarterlyVolume);

// @desc      Get List Of Quarterly TtdTtr
// @route     GET /api/executive-dashboard/ttd-ttr
// @access    Public
exports.getQuarterlyVolumes = factory.getAll(QuarterlyVolume);

// @desc      Update Quarterly TtdTtr
// @route     PATCH /api/executive-dashboard/ttd-ttr/:id
// @access    private
exports.updateQuarterlyVolume = factory.updateOne(QuarterlyVolume);

// @desc      Delete Quarterly TtdTtr
// @route     DELETE /api/executive-dashboard/ttd-ttr/:id
// @access    private

exports.deleteQuarterlyVolume = factory.deleteOne(QuarterlyVolume);
