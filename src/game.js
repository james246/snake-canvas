import config from '../src/config';
import { rng } from './util';

const generateGrid = () => {
  var grid = new Array(config.gridSize);

  for (var i = 0; i <= grid.length - 1; i++) {
    grid[i] = new Array(config.gridSize);
  }

  return grid;
}

const generateSnake = () => {
  var gridMidPoint = (config.gridSize / 2) - 1;

  return {
    direction: Object.values(config.directions)[rng(
      Object.values(config.directions).length
    )],
    position: {
      x: gridMidPoint,
      y: gridMidPoint
    },
    length: config.snake.initialLength
  }
}

const plotSnake = (grid, snake) => {
  grid[snake.position.x][snake.position.y] = config.snake.headToken;

  for (var tailIndex = 1; tailIndex <= snake.length - 1; tailIndex++) {
    switch (snake.direction) {
      case config.directions.NORTH:
        grid[snake.position.x][snake.position.y + tailIndex] = config.snake.tailToken;
        break;
      case config.directions.EAST:
        grid[snake.position.x - tailIndex][snake.position.y] = config.snake.tailToken;
        break;
      case config.directions.SOUTH:
        grid[snake.position.x][snake.position.y - tailIndex] = config.snake.tailToken;
        break;
      case config.directions.WEST:
        grid[snake.position.x + tailIndex][snake.position.y] = config.snake.tailToken;
        break;
      }
  }
}

export {
  generateGrid,
  generateSnake,
  plotSnake
};