
//WARNING: assertEqual can only be used for checking primitive return types.
const assertEqual = function(actual, expected) {
  return (actual === expected)
  ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;
