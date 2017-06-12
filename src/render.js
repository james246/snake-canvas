import config from './config';

const setupCanvas = () => {
  const canvas = window.document.getElementById('canvas');
  const context = canvas.getContext('2d');

  canvas.setAttribute('height', config.canvas.height);
  canvas.setAttribute('width', config.canvas.width);

  return context;
};

const drawGrid = (context) => {
  context.fillStyle = config.styles.grid.fill;

  const columnWidth = config.canvas.width / config.gridSize;
  const rowHeight = config.canvas.height / config.gridSize;

  for (let i = 1; i <= config.gridSize; i++) {
    let x = i * columnWidth;
    let y = i * rowHeight;

    context.fillRect(x, 0, config.styles.grid.lineWidth, config.canvas.height);
    context.fillRect(0, y, config.canvas.width, config.styles.grid.lineWidth);
  }
}

const drawSnake = (snake, context) => {
  const cellSize = config.canvas.width / config.gridSize;
  const headSize = cellSize * 0.8;
  const padding  = (cellSize - headSize) / 2;

  const position = (snake.position.x * cellSize) + (headSize / 2) + padding;
  const radius   = headSize / 2;

  context.beginPath();
  context.arc(position, position, radius, 0, 2 * Math.PI, false);
  context.fillStyle = config.styles.snake.fill;
  context.fill();
}

export {
  setupCanvas,
  drawGrid,
  drawSnake
};
