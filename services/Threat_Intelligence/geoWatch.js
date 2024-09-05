const GeoWatch = require("../../models/Threat_Intelligence/GeoWatch");
const factory = require("../handlersFactory");

// @desc      Create GeoWatch
// @route     POST /api/threat_intelligence/geo-watch
// @access    private
exports.createGeoWatch = factory.create(GeoWatch);

// @desc      Get Specific APTFeed by id
// @route     GET /api/threat_intelligence/geo-watch/:id
// @access    Public
exports.getGeoWatch = factory.getOne(GeoWatch);

// @desc      Get List Of GeoWatch
// @route     GET /api/threat_intelligence/geo-watch
// @access    Public
exports.getGeoWatchs = factory.getAll(GeoWatch);

// @desc      Update APTFeed
// @route     PATCH /api/threat_intelligence/geo-watch/:id
// @access    private
exports.updateGeoWatch = factory.updateOne(GeoWatch);

// @desc      Delete APTFeed
// @route     DELETE /api/threat_intelligence/geo-watch/:id
// @access    private

exports.deleteGeoWatch = factory.deleteOne(GeoWatch);
