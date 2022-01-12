//Test array equal assertion

const assertArraysEqual = function(arr1, arr2) {
  console.log(arr1);
  let maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`☐💔💔💔☐ Assertion Failed: ${arr1} !== ${arr2}`);
    }
  }
  return console.log(`☐💚💚💚☐ Assertion Passed: ${arr1} === ${arr2}`);
};

// Test actual array equality
const eqArrays = function(arr1, arr2) {
  let maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    } 
  }
  return true;
};

//middle function here
const middle = function(arrSeekMid) {    
  let middleOfArr = []; 
  let divideLength =  arrSeekMid.length / 2;
  
  if (arrSeekMid.length > 2) {
    arrSeekMid.length % 2 !== 0 
    ? middleOfArr.push(arrSeekMid[Math.floor(divideLength)])
    : middleOfArr.push(arrSeekMid[divideLength - 1], arrSeekMid[divideLength]);
  }  
  console.log(middleOfArr);
  return middleOfArr;
}

middle([5, 6, 7, 8])
middle([1]) // => []
middle([1, 2]) // => []
middle([2, 3, 4]) // => [3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([5, 6, 7, 8]), [6, 7])