const TtdTtr = require("../../models/Reports/TtdTtr");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/executive-dashboard/ttd-ttr
// @access    private
exports.createTtdTtr = factory.create(TtdTtr);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/executive-dashboard/ttd-ttr/:id
// @access    Public
exports.getTtdTtr = factory.getOne(TtdTtr);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/executive-dashboard/ttd-ttr
// @access    Public
exports.getTtdTtrs = factory.getAll(TtdTtr);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/executive-dashboard/ttd-ttr/:id
// @access    private
exports.updateTtdTtr = factory.updateOne(TtdTtr);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/executive-dashboard/ttd-ttr/:id
// @access    private

exports.deleteTtdTtr = factory.deleteOne(TtdTtr);
