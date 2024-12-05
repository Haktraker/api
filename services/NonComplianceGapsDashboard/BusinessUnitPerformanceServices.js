const BusinessUnitPerformance = require("../../models/NonComplianceGapsDashboard/BusinessUnitPerformance");
const factory = require("../handlersFactory");

// @desc      Create BusinessUnitPerformance
// @route     POST /api/non-compliance-gaps-dashboard/business-unit-performance
// @access    private
exports.createBusinessUnitPerformance = factory.create(BusinessUnitPerformance);

// @desc      Get Specific BusinessUnitPerformance by id
// @route     GET /api/non-compliance-gaps-dashboard/business-unit-performance/:id
// @access    Public
exports.getBusinessUnitPerformance = factory.getOne(BusinessUnitPerformance);

// @desc      Get List Of BusinessUnitPerformance
// @route     GET /api/non-compliance-gaps-dashboard/business-unit-performance
// @access    Public
exports.getBusinessUnitPerformances = factory.getAll(BusinessUnitPerformance);

// @desc      Update BusinessUnitPerformance
// @route     PATCH /api/non-compliance-gaps-dashboard/business-unit-performance/:id
// @access    private
exports.updateBusinessUnitPerformance = factory.updateOne(BusinessUnitPerformance);

// @desc      Delete BusinessUnitPerformance
// @route     DELETE /api/non-compliance-gaps-dashboard/business-unit-performance/:id
// @access    private

exports.deleteBusinessUnitPerformance = factory.deleteOne(BusinessUnitPerformance);
