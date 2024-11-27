const ComplianceGapsByFrameWrok = require("../../models/NonComplianceGapsDashboard/ComplianceGapsByFrameWrok");
const factory = require("../handlersFactory");

// @desc      Create Cyber Resilience Time
// @route     POST /api/non-compliance-gaps-dashboard/compliance-gaps-by-frame-work
// @access    private
exports.createComplianceGapsByFrameWrok = factory.create(ComplianceGapsByFrameWrok);

// @desc      Get Specific Cyber Resilience Time by id
// @route     GET /api/non-compliance-gaps-dashboard/compliance-gaps-by-frame-work/:id
// @access    Public
exports.getComplianceGapsByFrameWrok = factory.getOne(ComplianceGapsByFrameWrok);

// @desc      Get List Of Cyber Resilience Time
// @route     GET /api/non-compliance-gaps-dashboard/compliance-gaps-by-frame-work
// @access    Public
exports.getComplianceGapsByFrameWroks = factory.getAll(ComplianceGapsByFrameWrok);

// @desc      Update Cyber Resilience Time
// @route     PATCH /api/non-compliance-gaps-dashboard/compliance-gaps-by-frame-work/:id
// @access    private
exports.updateComplianceGapsByFrameWrok = factory.updateOne(ComplianceGapsByFrameWrok);

// @desc      Delete Cyber Resilience Time
// @route     DELETE /api/non-compliance-gaps-dashboard/compliance-gaps-by-frame-work/:id
// @access    private

exports.deleteComplianceGapsByFrameWrok = factory.deleteOne(ComplianceGapsByFrameWrok);
