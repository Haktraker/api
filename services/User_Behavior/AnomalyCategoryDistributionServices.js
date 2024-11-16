const AnomalyCategoryDistribution = require("../../models/User_Behavior/AnomalyCategoryDistribution");
const factory = require("../handlersFactory");
// const { uploadSingleFile } = require("../middlewares/uploadImagesMiddleWare");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create AnomalyCategoryDistribution
// @route     POST /api/uba/anomaly-category-distribution
// @access    private
exports.createAnomalyCategoryDistribution = factory.create(
  AnomalyCategoryDistribution
);

// @desc      Get Specific AnomalyCategoryDistribution by id
// @route     GET /api/uba/anomaly-category-distribution/:id
// @access    Public
exports.getAnomalyCategoryDistribution = factory.getOne(
  AnomalyCategoryDistribution
);

// @desc      Get List Of AnomalyCategoryDistribution
// @route     GET /api/uba/anomaly-category-distribution
// @access    Public
exports.getAnomalyCategoryDistributions = factory.getAll(
  AnomalyCategoryDistribution
);

// @desc      Update AnomalyCategoryDistribution
// @route     PATCH /api/uba/anomaly-category-distribution/:id
// @access    private
exports.updateAnomalyCategoryDistribution = factory.updateOne(
  AnomalyCategoryDistribution
);

// @desc      Delete AnomalyCategoryDistribution
// @route     DELETE /api/uba/anomaly-category-distribution/:id
// @access    private

exports.deleteAnomalyCategoryDistribution = factory.deleteOne(
  AnomalyCategoryDistribution
);
