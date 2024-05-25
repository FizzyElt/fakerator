"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createValueGenerator = exports.createTupleGenerator = exports.createSelectionGenerator = exports.createObjectGenerator = exports.createGeneratorByType = exports.createBoundedSeriesGenerator = exports.createArrayGenerator = void 0;
var _faker = require("@faker-js/faker");
var _config_scheme = require("./config_scheme.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * value
 * @param {ValueConfig} config
 * @return {function}
 */
var createValueGenerator = exports.createValueGenerator = function createValueGenerator(config) {
  _config_scheme.valueConfigScheme.parse(config);
  return config.generateFn;
};

/**
 * selection
 * @param {SelectionConfig} config
 * @return {function} The configuration object with the type "select" and the provided items.
 */
var createSelectionGenerator = exports.createSelectionGenerator = function createSelectionGenerator(config) {
  _config_scheme.selectionConfigScheme.parse(config);
  var items = config.items;
  return function () {
    return items[_faker.faker.number["int"](items.length - 1)];
  };
};

/**
 * object
 * @param {ObjectConfig} config
 * @param {(() => ValueConfig)=} customTypeMatch
 * @return {() => object}
 */
var createObjectGenerator = exports.createObjectGenerator = function createObjectGenerator(config, customTypeMatch) {
  _config_scheme.objConfigScheme.parse(config);
  var keyWithFns = Object.entries(config.content).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      subConfig = _ref2[1];
    return [key, createGeneratorByType(subConfig, customTypeMatch)];
  });
  return function () {
    var result = {};
    var _iterator = _createForOfIteratorHelper(keyWithFns),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          generateFn = _step$value[1];
        result[key] = generateFn();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return result;
  };
};

/**
 * array
 * @param {ArrayConfig} config
 * @param {(() => ValueConfig)=} customTypeMatch
 * @return {() => Array}
 */
var createArrayGenerator = exports.createArrayGenerator = function createArrayGenerator(config, customTypeMatch) {
  _config_scheme.arrayConfigScheme.parse(config);
  var itemGeneratorFn = createGeneratorByType(config.item, customTypeMatch);
  return function () {
    var _config$len;
    return Array.from({
      length: (_config$len = config.len) !== null && _config$len !== void 0 ? _config$len : 0
    }, itemGeneratorFn);
  };
};

/**
 * tuple
 * @param {TupleConfig} config
 * @param {(() => ValueConfig)=} customTypeMatch
 * @return {() => Array}
 */
var createTupleGenerator = exports.createTupleGenerator = function createTupleGenerator(config, customTypeMatch) {
  _config_scheme.tupleConfigScheme.parse(config);
  var itemsFns = config.configItems.map(function (configItem) {
    return createGeneratorByType(configItem, customTypeMatch);
  });
  return function () {
    return itemsFns.map(function (generateFn) {
      return generateFn();
    });
  };
};

/**
 * bounded series
 * @param {BoundedSeriesConfig} config
 * @return {() => Array<number>}
 */
var createBoundedSeriesGenerator = exports.createBoundedSeriesGenerator = function createBoundedSeriesGenerator(config) {
  _config_scheme.boundedSeriesScheme.parse(config);
  var upperLimit = config.upperLimit,
    lowerLimit = config.lowerLimit,
    createInitValue = config.createInitValue,
    count = config.count;
  return function () {
    var value = createInitValue();
    var boundedSeries = [];
    for (var i = 0; i < count; i++) {
      value = _faker.faker.number["float"]({
        max: upperLimit,
        min: lowerLimit
      }) * value;
      boundedSeries.push(value);
    }
    return boundedSeries;
  };
};

/**
 *
 * @param {ValueConfig | SelectionConfig | ArrayConfig | ObjectConfig | TupleConfig | BoundedSeriesConfig} config
 * @param {(() => ValueConfig)=} customTypeMatch
 * @return {function}
 */
var createGeneratorByType = exports.createGeneratorByType = function createGeneratorByType(config, customTypeMatch) {
  switch (config.type) {
    case "obj":
      return createObjectGenerator(config, customTypeMatch);
    case "arr":
      return createArrayGenerator(config, customTypeMatch);
    case "select":
      return createSelectionGenerator(config);
    case "tuple":
      return createTupleGenerator(config, customTypeMatch);
    case "value":
      return createValueGenerator(config);
    case "bounded_series":
      return createBoundedSeriesGenerator(config);
    default:
      {
        if (customTypeMatch) {
          return createValueGenerator(customTypeMatch(config));
        }
        throw Error("config type \"".concat(config.type, "\" is not supported"));
      }
  }
};