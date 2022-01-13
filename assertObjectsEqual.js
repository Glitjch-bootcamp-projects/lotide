const { read } = require('fs');

// eqArrays
const eqArrays = function(arr1, arr2) {
  let maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Test eqObjects 
const eqObjects = function(obj1, obj2) {
  
  //if the quantity of keys are different...
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  
  for (let key in obj1) {
    //if values of the iterated key of both objects are arrays...
    if (Array.isArray(obj1[key])) {
      if (Array.isArray(obj2[key])) {
        if (!eqArrays(obj1[key], obj2[key])) {
          return false;
        }
      }
    //otherwise, normally compare values of a shared key, if available
    } else if (obj1[key] !== obj2[key]) return false;
  }
  
  return true;
}



// New code for asserting two compared objects
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) 
  ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const ef = { 
  e: [
    "4", 
    5, 
    apple = {
      color: "red",
      shape: "round",
      taste: "delcious"
    }
  ], 
  f: "5"
};
const fe =  {
  f: "5",
  e: [
    "4", 
    5, 
    apple = {
      color: "red",
      shape: "round",
      taste: "delcious"
    }
  ]
};



// Test cases 
assertObjectsEqual(cd, dc)
assertObjectsEqual(ef, fe)
