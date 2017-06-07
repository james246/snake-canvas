var config = {
  directions: { NORTH: 0, EAST: 1, SOUTH: 2, WEST: 3 },
  gridSize: 10,
  canvas: {
    height: 300,
    width: 300
  },
  styles: {
    grid: {
      lineWidth: 1,
      fill: 'grey'
    }
  },
  snake: {
    initialLength: 2,
    headToken: 'o',
    tailToken: '~'
  }
};

var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

canvas.setAttribute('height', config.canvas.height);
canvas.setAttribute('width', config.canvas.width);

function generateGrid() {
  var grid = new Array(config.gridSize);

  for (var i = 0; i <= grid.length - 1; i++) {
    grid[i] = new Array(config.gridSize);
  }

  return grid;
}

function drawGrid() {
  c.fillStyle = config.styles.grid.fill;

  var columnWidth = config.canvas.width / config.gridSize;
  var rowHeight = config.canvas.height / config.gridSize;

  for (var i = 1; i <= config.gridSize; i++) {
    var x = i * columnWidth;
    var y = i * rowHeight;

    c.fillRect(x, 0, config.styles.grid.lineWidth, config.canvas.height);
    c.fillRect(0, y, config.canvas.width, config.styles.grid.lineWidth);
  }
}

function generateSnake() {
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

function plotSnake() {
  grid[snake.position.x][snake.position.y] = config.snake.headToken;

  for (var tailIndex = 1; tailIndex <= config.snake.initialLength - 1; tailIndex++) {
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

function rng(max) {
  return Math.floor((Math.random() * max));
}

function printGame() {
  var s = '';
  for (var y = 0; y <= grid.length - 1; y++) {
    for (var x = 0; x <= grid[y].length - 1; x++) {
      s += '|' + (grid[x][y] ? grid[x][y] : ' ');
    }
    s += '\n';
  }
  console.log(s);
}

var grid = generateGrid();
var snake = generateSnake();

drawGrid();
plotSnake();
printGame();
