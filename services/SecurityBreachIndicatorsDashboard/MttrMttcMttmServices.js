const MttrMttcMttm = require("../../models/SecurityBreachIndicatorsDashboard/MTTR_MTTC_MTTM");
const factory = require("../handlersFactory");

// @desc      Create Cyber Resilience Time
// @route     POST /api/security-breach-indicators-dashboard/mttr-mttc-mttm
// @access    private
exports.createMttrMttcMttm = factory.create(
  MttrMttcMttm
);

// @desc      Get Specific Cyber Resilience Time by id
// @route     GET /api/security-breach-indicators-dashboard/mttr-mttc-mttm/:id
// @access    Public
exports.getMttrMttcMttm = factory.getOne(
  MttrMttcMttm
);

// @desc      Get List Of Cyber Resilience Time
// @route     GET /api/security-breach-indicators-dashboard/mttr-mttc-mttm
// @access    Public
exports.getMttrMttcMttms = factory.getAll(
  MttrMttcMttm
);

// @desc      Update Cyber Resilience Time
// @route     PATCH /api/security-breach-indicators-dashboard/mttr-mttc-mttm/:id
// @access    private
exports.updateMttrMttcMttm = factory.updateOne(
  MttrMttcMttm
);

// @desc      Delete Cyber Resilience Time
// @route     DELETE /api/security-breach-indicators-dashboard/mttr-mttc-mttm/:id
// @access    private

exports.deleteMttrMttcMttm = factory.deleteOne(
  MttrMttcMttm
);
