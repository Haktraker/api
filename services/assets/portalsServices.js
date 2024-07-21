const portals = require("../../models/assets/Portals");
const factory = require("../handlersFactory");

// @desc      Create portals
// @route     POST /api/assets/portals
// @access    private
exports.createportals = factory.create(portals);

// @desc      Get Specific portals by id
// @route     GET /api/assets/portals/:id
// @access    Public
exports.getportal = factory.getOne(portals);

// @desc      Get List Of portals
// @route     GET /api/assets/portals
// @access    Public
exports.getportals = factory.getAll(portals);

// @desc      Update portals
// @route     PATCH /api/assets/portals/:id
// @access    private
exports.updateportals = factory.updateOne(portals);

// @desc      Delete portals
// @route     DELETE /api/assets/portals/:id
// @access    private

exports.deleteportals = factory.deleteOne(portals);
