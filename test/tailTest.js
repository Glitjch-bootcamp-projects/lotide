const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    const input = ["Hello", "Lighthouse", "Labs"];
    const expected = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(input), expected);
  });


});