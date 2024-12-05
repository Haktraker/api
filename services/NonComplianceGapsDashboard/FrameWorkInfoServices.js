const FrameWorkInfo = require("../../models/NonComplianceGapsDashboard/FrameWorkInfo");
const factory = require("../handlersFactory");

// @desc      Create FrameWork Info
// @route     POST /api/non-compliance-gaps-dashboard/frame-work-info
// @access    private
exports.createFrameWorkInfo = factory.create(
  FrameWorkInfo
);

// @desc      Get Specific FrameWork Info by id
// @route     GET /api/non-compliance-gaps-dashboard/frame-work-info/:id
// @access    Public
exports.getFrameWorkInfo = factory.getOne(
  FrameWorkInfo
);

// @desc      Get List Of FrameWork Info
// @route     GET /api/non-compliance-gaps-dashboard/frame-work-info
// @access    Public
exports.getFrameWorkInfos = factory.getAll(
  FrameWorkInfo
);

// @desc      Update FrameWork Info
// @route     PATCH /api/non-compliance-gaps-dashboard/frame-work-info/:id
// @access    private
exports.updateFrameWorkInfo = factory.updateOne(
  FrameWorkInfo
);

// @desc      Delete FrameWork Info
// @route     DELETE /api/non-compliance-gaps-dashboard/frame-work-info/:id
// @access    private

exports.deleteFrameWorkInfo = factory.deleteOne(
  FrameWorkInfo
);
