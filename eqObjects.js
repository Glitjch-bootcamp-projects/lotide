// Assert Equal
const assertEqual = function(actual, expected) {
  return (actual === expected)
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};



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



// New Code:
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
};




// Test Cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(
  eqObjects(ab, ba),
  true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(
  eqObjects(ab, abc),
  false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(
  eqObjects(cd, dc),
  true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(
  eqObjects(cd, cd2),
  false);