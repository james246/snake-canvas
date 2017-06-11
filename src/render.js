var canvas = window.document.getElementById('canvas');
var c = canvas.getContext('2d');

canvas.setAttribute('height', config.canvas.height);
canvas.setAttribute('width', config.canvas.width);

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

function drawSnake() {

  var cellSize = config.canvas.width / config.gridSize;
  var headSize = cellSize * 0.8;
  var padding  = (cellSize - headSize) / 2;
  
  var position = (snake.position.x * cellSize) + (headSize / 2) + padding;
  var radius   = headSize / 2;

  c.beginPath();
  c.arc(position, position, radius, 0, 2 * Math.PI, false);
  c.fillStyle = config.styles.snake.fill;
  c.fill();
}