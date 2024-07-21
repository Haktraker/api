const Iocs = require("../../models/Threat_Intelligence/IOCs");
const factory = require("../handlersFactory");

// @desc      Create Iocs
// @route     POST /api/threat_intelligence/Iocs
// @access    private
exports.createIocs = factory.create(Iocs);

// @desc      Get Specific APTFeed by id
// @route     GET /api/threat_intelligence/Iocs/:id
// @access    Public
exports.getIoc = factory.getOne(Iocs);

// @desc      Get List Of Iocs
// @route     GET /api/threat_intelligence/Iocs
// @access    Public
exports.getIocs = factory.getAll(Iocs);

// @desc      Update APTFeed
// @route     PATCH /api/threat_intelligence/Iocs/:id
// @access    private
exports.updateIoc = factory.updateOne(Iocs);

// @desc      Delete APTFeed
// @route     DELETE /api/threat_intelligence/Iocs/:id
// @access    private

exports.deleteIoc = factory.deleteOne(Iocs);
