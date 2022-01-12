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

// Am I doing something wrong? This solution, converting entire arrays into strings, seems too good to be true...
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS