const assertEqual = function(actual, expected) {
  return (actual === expected)
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  let maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//Am I doing something wrong? This solution, converting entire arrays into strings, seems too good to be true...
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS