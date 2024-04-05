// value
export const createValueConfig = (generateFn) => ({ type: 'value', generateFn });

// selection
export const createSelectionConfig = (items) => ({ type: 'select', items });

// object
export const createObjectConfig = (content) => ({ type: 'obj', content });

// array
export const createArrayConfig = (item, len) => ({ type: 'arr', item, len });

// tuple
export const createTupleConfig = (configItems) => ({ type: 'tuple', configItems });

// bounded_series
export const createBoundedSeriesConfig = (config) => ({ type: 'bounded_series', ...config });
