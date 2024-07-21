const AttackSurface = require("../models/AttackSurface");
const factory = require("./handlersFactory");
const { uploadSingleFile } = require("../middlewares/uploadImagesMiddleWare");

exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create AttackSurface
// @route     POST /api/attack-surface
// @access    private
exports.createAttackSurface = factory.create(AttackSurface);

// @desc      Get Specific AttackSurface by id
// @route     GET /api/attack-surface/:id
// @access    Public
exports.getAttackSurface = factory.getOne(AttackSurface);

// @desc      Get List Of AttackSurface
// @route     GET /api/attack-surface
// @access    Public
exports.getAttackSurfaces = factory.getAll(AttackSurface);

// @desc      Update AttackSurface
// @route     PATCH /api/attack-surface/:id
// @access    private
exports.updateAttackSurface = factory.updateOne(AttackSurface);

// @desc      Delete AttackSurface
// @route     DELETE /api/attack-surface/:id
// @access    private

exports.deleteAttackSurface = factory.deleteOne(AttackSurface);
