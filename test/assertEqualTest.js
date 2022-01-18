const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('#assertEqual', () => { 
  it('returns "Lighthouse Labs" for "Lighthouse Labs"', () => {
    const input1 = "Lighthouse Labs";
    const input2 = "Lighthouse Labs";
    const expected = true;
    assert.strictEqual(assertEqual(input1, input2), true);
  }) 

});
