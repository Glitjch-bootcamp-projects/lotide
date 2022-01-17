const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const assertArraysEqual = function(arr1, arr2) {
  assertEqual(eqArrays(arr1, arr2), true);
};


module.exports = assertArraysEqual;

