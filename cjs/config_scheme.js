"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueConfigScheme = exports.tupleConfigScheme = exports.selectionConfigScheme = exports.objConfigScheme = exports.boundedSeriesScheme = exports.arrayConfigScheme = void 0;
var _zod = require("zod");
var valueConfigScheme = exports.valueConfigScheme = _zod.z.object({
  type: _zod.z.string().regex(/^value$/, {
    message: "invalid type string"
  }),
  generateFn: _zod.z["function"]()
});
var selectionConfigScheme = exports.selectionConfigScheme = _zod.z.object({
  type: _zod.z.string().regex(/^select$/, {
    message: "invalid type string"
  }),
  items: _zod.z.any().array().nonempty({
    message: "items can not be empty"
  })
});
var arrayConfigScheme = exports.arrayConfigScheme = _zod.z.object({
  type: _zod.z.string().regex(/^arr$/, {
    message: "invalid type string"
  }),
  item: _zod.z.object({}),
  len: _zod.z.number().nonnegative()
});
var tupleConfigScheme = exports.tupleConfigScheme = _zod.z.object({
  type: _zod.z.string().regex(/^tuple$/, {
    message: "invalid type string"
  }),
  configItems: _zod.z.any().array()
});
var objConfigScheme = exports.objConfigScheme = _zod.z.object({
  type: _zod.z.string().regex(/^obj$/, {
    message: "invalid type string"
  }),
  content: _zod.z.object({})
});
var boundedSeriesScheme = exports.boundedSeriesScheme = _zod.z.object({
  type: _zod.z.string().regex(/^bounded_series$/, {
    message: "invalid type string"
  }),
  upperLimit: _zod.z.number().nonnegative(),
  lowerLimit: _zod.z.number().nonnegative(),
  createInitValue: _zod.z["function"]().args().returns(_zod.z.number()),
  count: _zod.z.number().nonnegative()
}).refine(function (_ref) {
  var upperLimit = _ref.upperLimit,
    lowerLimit = _ref.lowerLimit;
  return upperLimit >= lowerLimit;
}, {
  message: "lowerLimit can not greater then upperLimit"
}).refine(function (_ref2) {
  var createInitValue = _ref2.createInitValue;
  return typeof createInitValue() === "number";
}, {
  message: "createInitValue is not return number",
  path: ["createInitValue"]
});