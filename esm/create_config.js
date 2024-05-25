"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createValueConfig = exports.createTupleConfig = exports.createSelectionConfig = exports.createObjectConfig = exports.createBoundedSeriesConfig = exports.createArrayConfig = void 0;
var _faker = require("@faker-js/faker");
var _config_scheme = require("./config_scheme.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * value
 * @param {function} generateFn - The function used to generate the value.
 * @return {ValueConfig} The configuration object with the type "value" and the provided generate function.
 */
var createValueConfig = exports.createValueConfig = function createValueConfig(generateFn) {
  var config = {
    type: "value",
    generateFn: generateFn
  };
  _config_scheme.valueConfigScheme.parse(config);
  return config;
};

/**
 * selection
 * @param {Array} items - The array of items to choose from.
 * @return {SelectionConfig} The configuration object with the type "select" and the provided items.
 */
var createSelectionConfig = exports.createSelectionConfig = function createSelectionConfig(items) {
  var config = {
    type: "select",
    items: items
  };
  _config_scheme.selectionConfigScheme.parse(config);
  return config;
};

/**
 * object
 * @param {object} content
 * @return {ObjectConfig}
 */
var createObjectConfig = exports.createObjectConfig = function createObjectConfig(content) {
  var config = {
    type: "obj",
    content: content
  };
  _config_scheme.objConfigScheme.parse(config);
  return config;
};

/**
 * array
 * @param {object} item
 * @param {number} len
 * @return {ArrayConfig}
 */
var createArrayConfig = exports.createArrayConfig = function createArrayConfig(item, len) {
  var config = {
    type: "arr",
    item: item,
    len: len
  };
  _config_scheme.arrayConfigScheme.parse(config);
  return config;
};

/**
 * tuple
 * @param {Array} configItems
 * @return {TupleConfig}
 */
var createTupleConfig = exports.createTupleConfig = function createTupleConfig(configItems) {
  var config = {
    type: "tuple",
    configItems: configItems
  };
  _config_scheme.tupleConfigScheme.parse(config);
  return config;
};

/**
 * bounded series
 * @param {{ upperLimit: number, lowerLimit: number, createInitValue: () => number, count: number }} config
 * @return {BoundedSeriesConfig}
 */
var createBoundedSeriesConfig = exports.createBoundedSeriesConfig = function createBoundedSeriesConfig(config) {
  var newConfig = _objectSpread({
    type: "bounded_series"
  }, config);
  _config_scheme.boundedSeriesScheme.parse(newConfig);
  return newConfig;
};