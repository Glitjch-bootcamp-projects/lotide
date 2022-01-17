const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test
middle([5, 6, 7, 8]);
middle([1]); // => []
middle([1, 2]); // => []
middle([2, 3, 4]); // => [3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArraysEqual(middle([5, 6, 7, 8]), [6, 7]);