var config = {
  gridSize: 20,
  canvas: {
    height: 300,
    width: 300
  },
  styles: {
    grid: {
      fill: 'grey'
    }
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

  var gridLineWidth = 1;

  var columnWidth = config.canvas.width / config.gridSize;
  var rowHeight = config.canvas.height / config.gridSize;

  for (var i = 1; i <= config.gridSize; i++) {
    var x = i * columnWidth;
    var y = i * rowHeight;

    c.fillRect(x, 0, gridLineWidth, config.canvas.height);
    c.fillRect(0, y, config.canvas.width, gridLineWidth);
  }
}

var grid = generateGrid();
drawGrid(grid);
