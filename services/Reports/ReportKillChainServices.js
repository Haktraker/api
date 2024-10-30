const KillChainTable = require("../../models/Reports/KillChainTable");
const factory = require("../handlersFactory");

// @desc      Create Kill Chain Table
// @route     POST /api/reports/kill-chain-table
// @access    private
exports.createKillChainTable = factory.create(KillChainTable);

// @desc      Get Specific Kill Chain Table by id
// @route     GET /api/reports/kill-chain-table/:id
// @access    Public
exports.getKillChainTable = factory.getOne(KillChainTable);

// @desc      Get List Of Kill Chain Table
// @route     GET /api/reports/kill-chain-table
// @access    Public
exports.getKillChainTables = factory.getAll(KillChainTable);

// @desc      Update Kill Chain Table
// @route     PATCH /api/reports/kill-chain-table/:id
// @access    private
exports.updateKillChainTable = factory.updateOne(KillChainTable);

// @desc      Delete Kill Chain Table
// @route     DELETE /api/reports/kill-chain-table/:id
// @access    private

exports.deleteKillChainTable = factory.deleteOne(KillChainTable);
