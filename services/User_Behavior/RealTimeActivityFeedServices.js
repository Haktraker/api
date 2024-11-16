const RealTimeActivityFeed = require("../../models/User_Behavior/RealTimeActivityFeed");
const factory = require("../handlersFactory");
// const { uploadSingleFile } = require("../middlewares/uploadImagesMiddleWare");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create RealTimeActivityFeed
// @route     POST /api/uba/realtime-activity-feed
// @access    private
exports.createRealTimeActivityFeed = factory.create(RealTimeActivityFeed);

// @desc      Get Specific RealTimeActivityFeed by id
// @route     GET /api/uba/realtime-activity-feed/:id
// @access    Public
exports.getRealTimeActivityFeed = factory.getOne(RealTimeActivityFeed);

// @desc      Get List Of RealTimeActivityFeed
// @route     GET /api/uba/realtime-activity-feed
// @access    Public
exports.getRealTimeActivityFeeds = factory.getAll(RealTimeActivityFeed);

// @desc      Update RealTimeActivityFeed
// @route     PATCH /api/uba/realtime-activity-feed/:id
// @access    private
exports.updateRealTimeActivityFeed = factory.updateOne(RealTimeActivityFeed);

// @desc      Delete RealTimeActivityFeed
// @route     DELETE /api/uba/realtime-activity-feed/:id
// @access    private

exports.deleteRealTimeActivityFeed = factory.deleteOne(RealTimeActivityFeed);
