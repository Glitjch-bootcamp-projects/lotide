// Assert Array Equals
const assertArraysEqual = function(arr1, arr2) {
  let maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`☐💔💔💔☐ Assertion Failed: ${arr1} !== ${arr2}`);
    }
  }
  return console.log(`☐💚💚💚☐ Assertion Passed: ${arr1} === ${arr2}`);
};




// New code Map
const words = ["ground", "control", "to", "major", "tom", "snappy", "epilogue", "canter", "ethereal"];

const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};



//Test Cases
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.split("").reverse().join(""));
const results3 = map(words, word => word.length);

console.log(results1);
console.log(results2);
console.log(results3);

assertArraysEqual(results1[0], "g");
assertArraysEqual(results2[0], "dnuorg");
assertArraysEqual(results3[0], 6);
