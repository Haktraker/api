const ControlCategoryPerformance = require("../../models/NonComplianceGapsDashboard/ControlCategoryPerformance");
const factory = require("../handlersFactory");

// @desc      Create Control Category Performance
// @route     POST /api/non-compliance-gaps-dashboard/control-category-performance
// @access    private
exports.createControlCategoryPerformance = factory.create(ControlCategoryPerformance);

// @desc      Get Specific Control Category Performance by id
// @route     GET /api/non-compliance-gaps-dashboard/control-category-performance/:id
// @access    Public
exports.getControlCategoryPerformance = factory.getOne(ControlCategoryPerformance);

// @desc      Get List Of Control Category Performance
// @route     GET /api/non-compliance-gaps-dashboard/control-category-performance
// @access    Public
exports.getControlCategoryPerformances = factory.getAll(ControlCategoryPerformance);

// @desc      Update Control Category Performance
// @route     PATCH /api/non-compliance-gaps-dashboard/control-category-performance/:id
// @access    private
exports.updateControlCategoryPerformance = factory.updateOne(ControlCategoryPerformance);

// @desc      Delete Control Category Performance
// @route     DELETE /api/non-compliance-gaps-dashboard/control-category-performance/:id
// @access    private

exports.deleteControlCategoryPerformance = factory.deleteOne(ControlCategoryPerformance);
