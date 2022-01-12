const assertArrayEquals = function(arr1, arr2) {
  let maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`☐💔💔💔☐ Assertion Failed: ${arr1} !== ${arr2}`);
    }
  }
  console.log(`☐💚💚💚☐ Assertion Passed: ${arr1} === ${arr2}`);
};
assertArrayEquals([5, 6, 7], [5, 6, 7]);
