import config from './config';
import { rng, directionLogic } from './util';

export default class Snake {
  constructor() {
    this.setRandomDirection();
    this.setInitialPosition();
  }

  move() {
    const headPosition = this.position[0];

    // set new head position
    directionLogic(
      this.direction,
      () => --headPosition.y,
      () => ++headPosition.x,
      () => ++headPosition.y,
      () => --headPosition.x
    );
  }


  setRandomDirection() {
    this.direction = Object.values(config.directions)[rng(
      Object.values(config.directions).length
    )];
  }

  setInitialPosition() {
    const gridMidPoint = (config.gridSize / 2) - 1;

    const headPosition = { x: gridMidPoint, y: gridMidPoint };

    const initialPosition = new Array(headPosition);

    const setTailPosition = (x, y) => initialPosition.push({ x, y });

    for (let tailIndex = 1; tailIndex < config.snake.initialLength; tailIndex++) {
      directionLogic(
        this.direction,
        () => setTailPosition(headPosition.x, headPosition.y + tailIndex),
        () => setTailPosition(headPosition.x - tailIndex, headPosition.y),
        () => setTailPosition(headPosition.x, headPosition.y - tailIndex),
        () => setTailPosition(headPosition.x + tailIndex, headPosition.y)
      );
    }

    this.position = initialPosition;
  }

  length() {
    return this.position.length;
  }
}
