"use strict";

var _vitest = require("vitest");
var _zod = require("zod");
var _create_generator_fn = require("./create_generator_fn.mjs");
var _create_config = require("./create_config.mjs");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
(0, _vitest.describe)("createValueGenerator", function () {
  (0, _vitest.test)("normal", function () {
    var value = (0, _create_generator_fn.createValueGenerator)({
      type: "value",
      generateFn: function generateFn() {
        return 50;
      }
    })();
    (0, _vitest.expect)(value).toBe(50);
    var value2 = (0, _create_generator_fn.createValueGenerator)({
      type: "value",
      generateFn: function generateFn() {
        return {
          age: 100,
          name: "hello"
        };
      }
    })();
    (0, _vitest.expect)(value2).toEqual({
      age: 100,
      name: "hello"
    });
  });
});
(0, _vitest.describe)("createSelectionGenerator", function () {
  (0, _vitest.test)("normal", function () {
    var value = (0, _create_generator_fn.createSelectionGenerator)({
      type: "select",
      items: [1]
    })();
    (0, _vitest.expect)(value).toBe(1);
    var value2 = (0, _create_generator_fn.createSelectionGenerator)({
      type: "select",
      items: [30, 30, 30, 30]
    })();
    (0, _vitest.expect)(value2).toBe(30);
  });
});
(0, _vitest.describe)("createArrayGenerator", function () {
  (0, _vitest.test)("normal", function () {
    var list = (0, _create_generator_fn.createArrayGenerator)({
      type: "arr",
      len: 5,
      item: {
        type: "value",
        generateFn: function generateFn() {
          return {
            age: 42
          };
        }
      }
    })();
    (0, _vitest.expect)(list).toEqual([{
      age: 42
    }, {
      age: 42
    }, {
      age: 42
    }, {
      age: 42
    }, {
      age: 42
    }]);
  });
});
(0, _vitest.describe)("createTupleGenerator", function () {
  (0, _vitest.test)("normal", function () {
    var tuple = (0, _create_generator_fn.createTupleGenerator)({
      type: "tuple",
      configItems: [{
        type: "value",
        generateFn: function generateFn() {
          return 225;
        }
      }, {
        type: "value",
        generateFn: function generateFn() {
          return "hello world";
        }
      }]
    })();
    (0, _vitest.expect)(tuple.length).toBe(2);
    var _tuple = _slicedToArray(tuple, 2),
      num = _tuple[0],
      str = _tuple[1];
    (0, _vitest.expect)(num).toBe(225);
    (0, _vitest.expect)(str).toBe("hello world");
  });
});
(0, _vitest.describe)("createObjectGenerator", function () {
  (0, _vitest.test)("normal", function () {
    var obj = (0, _create_generator_fn.createObjectGenerator)({
      type: "obj",
      content: {
        name: {
          type: "value",
          generateFn: function generateFn() {
            return "John";
          }
        },
        age: {
          type: "value",
          generateFn: function generateFn() {
            return 50;
          }
        },
        location: {
          type: "value",
          generateFn: function generateFn() {
            return "Taiwan";
          }
        }
      }
    })();
    (0, _vitest.expect)(obj).toEqual({
      name: "John",
      age: 50,
      location: "Taiwan"
    });
  });
});
(0, _vitest.describe)("createBoundedSeriesGenerator", function () {
  (0, _vitest.test)("normal", function () {
    var upperLimit = 1.1;
    var lowerLimit = 0.9;
    var initValue = 100;
    var count = 100;
    var list = (0, _create_generator_fn.createBoundedSeriesGenerator)({
      type: "bounded_series",
      upperLimit: upperLimit,
      lowerLimit: lowerLimit,
      createInitValue: function createInitValue() {
        return initValue;
      },
      count: count
    })();
    for (var i = 0; i < count; i++) {
      var value = list[i];
      if (i === 0) {
        var _ratio = value / initValue;
        (0, _vitest.expect)(_ratio).toBeLessThanOrEqual(upperLimit);
        (0, _vitest.expect)(_ratio).toBeGreaterThanOrEqual(lowerLimit);
        continue;
      }
      var prevValue = list[i - 1];
      var ratio = value / prevValue;
      (0, _vitest.expect)(ratio).toBeLessThanOrEqual(upperLimit);
      (0, _vitest.expect)(ratio).toBeGreaterThanOrEqual(lowerLimit);
    }
  });
});
(0, _vitest.describe)("createGeneratorByType", function () {
  (0, _vitest.test)("normal", function () {
    var config = {
      type: "obj",
      content: {
        name: {
          type: "value",
          generateFn: function generateFn() {
            return "John";
          }
        },
        age: {
          type: "value",
          generateFn: function generateFn() {
            return 50;
          }
        },
        locations: {
          type: "arr",
          item: {
            type: "value",
            generateFn: function generateFn() {
              return "Taiwan";
            }
          },
          len: 5
        }
      }
    };
    var result = (0, _create_generator_fn.createGeneratorByType)(config)();
    (0, _vitest.expect)(result).toEqual({
      name: "John",
      age: 50,
      locations: ["Taiwan", "Taiwan", "Taiwan", "Taiwan", "Taiwan"]
    });
  });
  (0, _vitest.test)("with custom type match", function () {
    var createIntValueConfig = function createIntValueConfig(option) {
      return (0, _create_config.createValueConfig)(function () {
        return 50;
      });
    };
    var createEmailValueConfig = function createEmailValueConfig(option) {
      return (0, _create_config.createValueConfig)(function () {
        return "xxx@example.com";
      });
    };
    var customTypeMatch = function customTypeMatch(config) {
      if (config.type === "int") {
        return createIntValueConfig(config.option);
      }
      if (config.type === "email") {
        return createEmailValueConfig(config.option);
      }
      throw Error("error");
    };
    var config = {
      type: "obj",
      content: {
        name: {
          type: "value",
          generateFn: function generateFn() {
            return "John";
          }
        },
        age: {
          type: "int"
        },
        email: {
          type: "email"
        }
      }
    };
    var result = (0, _create_generator_fn.createGeneratorByType)(config, customTypeMatch)();
    (0, _vitest.expect)(result).toEqual({
      name: "John",
      age: 50,
      email: "xxx@example.com"
    });
  });
});