import { assert } from 'chai';
import config from '../src/config';

describe('config.js', function() {
  it('should define a grid size', function() {
    assert.typeOf(config.gridSize, 'number');
  });
});
