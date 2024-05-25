/**
 * @typedef {{ type: 'value', generateFn: Function}} ValueConfig
 */

/**
 * @typedef {{ type: 'select', items: Array }} SelectionConfig
 */

/**
 * @typedef {{ type: 'arr', item: Object, len: number }} ArrayConfig
 */

/**
 * @typedef {{ type: 'tuple', configItems: Array }} TupleConfig
 */

/**
 * @typedef {{ type: 'obj', content: Object }} ObjectConfig
 */

/**
 * @typedef {{ type: 'bounded_series', upperLimit: number, lowerLimit: number, createInitValue: function, count: number }} BoundedSeriesConfig
 */
"use strict";