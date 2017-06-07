var GRID_SIZE = 20;

var CANVAS_HEIGHT = 300;
var CANVAS_WIDTH = 300;

var styles = {
  gridFill: 'grey'
};

var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

canvas.setAttribute('height', CANVAS_HEIGHT);
canvas.setAttribute('width', CANVAS_WIDTH);

function drawGrid() {
  c.fillStyle = styles.gridFill;
  var gridLineWidth = 1;

  var columnWidth = CANVAS_WIDTH / GRID_SIZE;
  var rowHeight = CANVAS_HEIGHT / GRID_SIZE;

  for (var i = 1; i <= GRID_SIZE; i++) {
    var x = i * columnWidth;
    var y = i * rowHeight;

    c.fillRect(x, 0, gridLineWidth, CANVAS_HEIGHT);
    c.fillRect(0, y, CANVAS_WIDTH, gridLineWidth);
  }
}

drawGrid();
