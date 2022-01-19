//assertEqualArrays function

const assertArraysEqual = function(arr1, arr2) {
  let maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`☐💔💔💔☐ Assertion Failed: ${arr1} !== ${arr2}`);
      break;
    }
  }
  return console.log(`☐💚💚💚☐ Assertion Passed: ${arr1} === ${arr2}`);
};


//eqArrays function

const eqArrays = function(arr1, arr2) {
  let maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//without function

const without = function(source, itemsToRemove) {
  const keptArr = [];
  for (let eachSource of source) {
    if (!itemsToRemove.includes(eachSource)) {
      keptArr.push(eachSource);
    }
  }
  console.log(keptArr);
};

//test cases
const num = [1, 2, 3];
without(num, [2, 3]);
assertArraysEqual(num, [1, 2, 3]); //Assertion Failed: 1 !== 1, 2, 3

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); //passed. unaltered by without function


