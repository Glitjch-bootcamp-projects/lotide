//WARNING: assertEqual can really only be used for checking primitive return types.
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  return (actual === expected)
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};
// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");