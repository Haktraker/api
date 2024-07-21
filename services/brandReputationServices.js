const BrandReputation = require("../models/BrandReputation");
const factory = require("./handlersFactory");

// @desc      Create BrandReputation
// @route     POST /api brand-reputation
// @access    private
exports.createBrandReputation = factory.create(BrandReputation);

// @desc      Get Specific BrandReputation by id
// @route     GET /api brand-reputation/:id
// @access    Public
exports.getBrandReputation = factory.getOne(BrandReputation);

// @desc      Get List Of BrandReputation
// @route     GET /api brand-reputation
// @access    Public
exports.getBrandsReputation = factory.getAll(BrandReputation);

// @desc      Update BrandReputation
// @route     PATCH /api brand-reputation/:id
// @access    private
exports.updateBrandReputation = factory.updateOne(BrandReputation);

// @desc      Delete BrandReputation
// @route     DELETE /api brand-reputation/:id
// @access    private

exports.deleteBrandReputation = factory.deleteOne(BrandReputation);
