import config from './config';
import { rng } from './util';

export default class Snake {
  constructor() {
    var gridMidPoint = (config.gridSize / 2) - 1;

    // set random direction
    this.direction = Object.values(config.directions)[rng(
      Object.values(config.directions).length
    )];

    // set initial position
    this.position = [
      { x: gridMidPoint, y: gridMidPoint }
    ]
  }

  length() {
    return this.position.length;
  }
}
