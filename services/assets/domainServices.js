const Domains = require("../../models/assets/Domains");
const factory = require("../handlersFactory");

// @desc      Create Domains
// @route     POST /api/assets/Domains
// @access    private
exports.createDomain = factory.create(Domains);

// @desc      Get Specific Domains by id
// @route     GET /api/assets/Domains/:id
// @access    Public
exports.getDomain = factory.getOne(Domains);

// @desc      Get List Of Domains
// @route     GET /api/assets/Domains
// @access    Public
exports.getDomains = factory.getAll(Domains);

// @desc      Update Domains
// @route     PATCH /api/assets/Domains/:id
// @access    private
exports.updateDomain = factory.updateOne(Domains);

// @desc      Delete Domains
// @route     DELETE /api/assets/Domains/:id
// @access    private

exports.deleteDomain = factory.deleteOne(Domains);
