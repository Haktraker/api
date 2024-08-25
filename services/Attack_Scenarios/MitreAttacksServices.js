const MitreAttacks = require("../../models/Attack_Scenarios/MitreAttacks");
const factory = require("../handlersFactory");

// @desc      Create MitreAttacks
// @route     POST /api/attack-scenarios/mitre-attacks
// @access    private
exports.createMitreAttacks = factory.create(MitreAttacks);

// @desc      Get Specific MitreAttacks by id
// @route     GET /api/attack-scenarios/mitre-attacks/:id
// @access    Public
exports.getMitreAttacks = factory.getOne(MitreAttacks);

// @desc      Get List Of MitreAttacks
// @route     GET /api/attack-scenarios/mitre-attacks
// @access    Public
exports.getMitreAttackss = factory.getAll(MitreAttacks);

// @desc      Update MitreAttacks
// @route     PATCH /api/attack-scenarios/mitre-attacks/:id
// @access    private
exports.updateMitreAttacks = factory.updateOne(MitreAttacks);

// @desc      Delete MitreAttacks
// @route     DELETE /api/attack-scenarios/mitre-attacks/:id
// @access    private

exports.deleteMitreAttacks = factory.deleteOne(MitreAttacks);
