const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  
  it("returns 6 and 7 for [5, 6, 7, 8]", () => {
    const input = [5, 6, 7, 8];
    const expected = [6, 7];
    assert.deepEqual(middle(input), expected);
  });

  it("returns [] for ['1']", () => {
    const input = ['1'];
    const expected = [];
    assert.deepEqual(middle(input), expected);
  });
  
  it("returns [3] for [2, 3, 4]", () => {
    const input = [2, 3, 4];
    const expected = [3];
    assert.deepEqual(middle(input), expected);
  });
  
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const expected = [3, 4];
    assert.deepEqual(middle(input), expected);
  });

});