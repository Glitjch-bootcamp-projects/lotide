//Test Assertion arrays equal
const assertArraysEqual = function(arr1, arr2) {
  let maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`☐💔💔💔☐ Assertion Failed: ${arr1} !== ${arr2}`);
    }
  }
  return console.log(`☐💚💚💚☐ Assertion Passed: ${arr1} === ${arr2}`);
};

//Test Equal arrays
const eqArrays = function(arr1, arr2) {
  let maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//Coding for new function: letter positions
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    
    if (results[sentence[i]]) results[sentence[i]].push(i);
    else if (sentence[i] !== " ") results[sentence[i]] = [i];
  
  }
  console.log(results);
  return results;
};

letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").e, [1]);
