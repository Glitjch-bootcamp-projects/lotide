const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// Test
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
