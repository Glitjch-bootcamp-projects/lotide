const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {

  it('returns true when [1, 2, 3] and [1, 2, 3] are passed', () => {
    const input1 = [1, 2, 3];
    const input2 = [1, 2, 3];
    const expected = true;
    assert.deepEqual(eqArrays(input1, input2), expected);
  });

});
