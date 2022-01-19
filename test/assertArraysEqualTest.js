const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  
  it("returns true for [5, 6, 7] and [5, 6, 7]", () => {
    const input1 = [5, 6, 7];
    const input2 = [5, 6, 7];
    const expected = true;
    assert.deepEqual(assertArraysEqual(input1, input2), expected);
  });
});


// Test
// assertArraysEqual([5, 6, 7], [5, 6, 7]);
