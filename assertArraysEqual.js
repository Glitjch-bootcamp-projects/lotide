const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const assertArraysEqual = function(arr1, arr2) {
  // console.log("eqArrays", eqArrays(arr1, arr2));
  return assertEqual(eqArrays(arr1, arr2), true);
};


module.exports = assertArraysEqual;

