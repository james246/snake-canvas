import config from './config';
import { rng, directionLogic } from './util';

export default class Snake {
  constructor() {
    this.setRandomDirection();
    this.setInitialPosition();
  }

  setRandomDirection() {
    this.direction = Object.values(config.directions)[rng(
      Object.values(config.directions).length
    )];
  }

  setInitialPosition() {
    const gridMidPoint = (config.gridSize / 2) - 1;

    const headPosition = { x: gridMidPoint, y: gridMidPoint };

    let initialPosition = [
      headPosition
    ];

    const setTailPosition = (x, y) => {
      initialPosition.push({ x: x, y: y });
    };

    for (let tailIndex = 1; tailIndex < config.snake.initialLength; tailIndex++) {
      directionLogic(
        this.direction,
        () => setTailPosition(headPosition.x, headPosition.y + tailIndex),
        () => setTailPosition(headPosition.x - tailIndex, headPosition.y),
        () => setTailPosition(headPosition.x, headPosition.y - tailIndex),
        () => setTailPosition(headPosition.x + tailIndex, headPosition.y)
      )
    }

    this.position = initialPosition;
  }

  length() {
    return this.position.length;
  }
}
