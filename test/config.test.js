const { assert } = require('chai');
const { config } = require('../src/config.js');

describe('config.js', function() {
  it('should define a grid size', function() {
    assert.typeOf(config.gridSize, 'number');
  });
});
