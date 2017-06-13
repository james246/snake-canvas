import config from '../src/config';

// TODO remove dependency on this and compute game state dynamically
const generateGrid = () => {
  var grid = new Array(config.gridSize);

  for (var i = 0; i <= grid.length - 1; i++) {
    grid[i] = new Array(config.gridSize);
  }

  return grid;
}

export {
  generateGrid,
  plotSnake
};
