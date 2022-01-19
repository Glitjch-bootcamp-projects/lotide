//Test Assertions
const assertEqual = function(actual, expected) {
  return (actual === expected)
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


//TODO make a function that would take an object and search for a given value if it's there
//New code for findkey
const findKeyByValue = function(sourceObject, targetValue) {
  let keyFound = undefined;
  for (const key in sourceObject) {
    //if the object contains the value, then assign the key to results
    if (sourceObject[key] === targetValue) {
      keyFound = key;
    }
  }
  console.log(keyFound);
  return keyFound;
};

// Test Cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);