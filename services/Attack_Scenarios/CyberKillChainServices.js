const CyberKillChain = require("../../models/Attack_Scenarios/CyberKillChain");
const factory = require("../handlersFactory");

// @desc      Create CyberKillChain
// @route     POST /api/attack-scenarios/cyber-kill-chain
// @access    private
exports.createCyberKillChain = factory.create(CyberKillChain);

// @desc      Get Specific CyberKillChain by id
// @route     GET /api/attack-scenarios/cyber-kill-chain/:id
// @access    Public
exports.getCyberKillChain = factory.getOne(CyberKillChain);

// @desc      Get List Of CyberKillChain
// @route     GET /api/attack-scenarios/cyber-kill-chain
// @access    Public
exports.getCyberKillChains = factory.getAll(CyberKillChain);

// @desc      Update CyberKillChain
// @route     PATCH /api/attack-scenarios/cyber-kill-chain/:id
// @access    private
exports.updateCyberKillChain = factory.updateOne(CyberKillChain);

// @desc      Delete CyberKillChain
// @route     DELETE /api/attack-scenarios/cyber-kill-chain/:id
// @access    private

exports.deleteCyberKillChain = factory.deleteOne(CyberKillChain);
