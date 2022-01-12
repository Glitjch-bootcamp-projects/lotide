const assertArraysEqual = function(arr1, arr2) {
  let maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`☐💔💔💔☐ Assertion Failed: ${arr1} !== ${arr2}`);
    }
  }
  return console.log(`☐💚💚💚☐ Assertion Passed: ${arr1} === ${arr2}`);
};

assertArraysEqual([5, 6, 7], [5, 6, 7]);
