"use strict";

var _vitest = require("vitest");
var _create_config = require("./create_config.mjs");
var _create_generator_fn = require("./create_generator_fn.mjs");
(0, _vitest.test)("createValueConfig", function () {
  var valueConfig = (0, _create_config.createValueConfig)(function () {
    return 44;
  });
  (0, _vitest.expect)(valueConfig.type).toBe("value");
  (0, _vitest.expect)(valueConfig.generateFn).toBeTypeOf("function");
});
(0, _vitest.test)("createSelectionConfig", function () {
  var options = [1, 2, 3, 4];
  var selectionConfig = (0, _create_config.createSelectionConfig)([1, 2, 3, 4]);
  (0, _vitest.expect)(selectionConfig.type).toBe("select");
  (0, _vitest.expect)(selectionConfig.items).toEqual(options);
});
(0, _vitest.test)("createArrayConfig", function () {
  var valueConfig = (0, _create_config.createValueConfig)(function () {
    return 44;
  });
  var arrConfig = (0, _create_config.createArrayConfig)(valueConfig, 20);
  (0, _vitest.expect)(arrConfig.type).toBe("arr");
  (0, _vitest.expect)(arrConfig.len).toBe(20);
  (0, _vitest.expect)(arrConfig.item).toEqual(valueConfig);
});
(0, _vitest.test)("createTupleConfig", function () {
  var value1Config = (0, _create_config.createValueConfig)(function () {
    return 123;
  });
  var value2Config = (0, _create_config.createValueConfig)(function () {
    return "hello";
  });
  var tupleConfig = (0, _create_config.createTupleConfig)([value1Config, value2Config]);
  (0, _vitest.expect)(tupleConfig.type).toBe("tuple");
  (0, _vitest.expect)(tupleConfig.configItems).toEqual([value1Config, value2Config]);
});
(0, _vitest.test)("createObjConfig", function () {
  var value1Config = (0, _create_config.createValueConfig)(function () {
    return 32;
  });
  var value2Config = (0, _create_config.createValueConfig)(function () {
    return "frank";
  });
  var objConfig = (0, _create_config.createObjectConfig)({
    name: value2Config,
    age: value1Config
  });
  (0, _vitest.expect)(objConfig.type).toBe("obj");
  (0, _vitest.expect)(objConfig.content).toEqual({
    name: value2Config,
    age: value1Config
  });
});
(0, _vitest.test)("createBoundedSeriesConfig", function () {
  var boundedSeriesConfig = (0, _create_config.createBoundedSeriesConfig)({
    count: 1,
    upperLimit: 1.2,
    lowerLimit: 1.0,
    createInitValue: function createInitValue() {
      return 40;
    }
  });
  (0, _vitest.expect)(boundedSeriesConfig.type).toBe("bounded_series");
  (0, _vitest.expect)(boundedSeriesConfig.upperLimit).toBe(1.2);
  (0, _vitest.expect)(boundedSeriesConfig.lowerLimit).toBe(1.0);
  (0, _vitest.expect)(boundedSeriesConfig.createInitValue).toBeTypeOf("function");
});