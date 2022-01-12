const assertEqual = function(actual, expected) {
  return (actual === expected)
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  let checkEqArr = "";
  arr1.join("") === arr2.join("") ? checkEqArr = true : checkEqArr = false;
  return checkEqArr;
};
