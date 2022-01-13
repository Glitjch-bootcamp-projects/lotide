// Test Assertion
const assertEqual = function(actual, expected) {
  return (actual === expected)
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

//countLetters function
const countLetters = function(stringToCount) {
  const results = {};
  for (let letter of stringToCount) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter]++;
      } else {
        results[letter] = 1;
      }
    }
  }
  console.log(results);
  return results;
};

//Test Cases
countLetters("lighthouse in the house");