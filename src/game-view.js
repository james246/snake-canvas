import config from './config';

export default class GameView {
  constructor(game) {
    this.game = game;
    this.context = GameView.setupCanvas();
  }

  static setupCanvas() {
    const canvas = window.document.getElementById('canvas');
    const context = canvas.getContext('2d');

    canvas.setAttribute('height', config.canvas.height);
    canvas.setAttribute('width', config.canvas.width);

    return context;
  }

  drawGrid() {
    this.context.fillStyle = config.styles.grid.fill;

    const columnWidth = config.canvas.width / config.gridSize;
    const rowHeight = config.canvas.height / config.gridSize;

    for (let i = 1; i <= config.gridSize; i++) {
      const x = i * columnWidth;
      const y = i * rowHeight;

      this.context.fillRect(x, 0, config.styles.grid.lineWidth, config.canvas.height);
      this.context.fillRect(0, y, config.canvas.width, config.styles.grid.lineWidth);
    }
  }

  drawSnake(snake) {
    const cellSize = config.canvas.width / config.gridSize;
    const headSize = cellSize * 0.8;
    const padding = (cellSize - headSize) / 2;

    const position = (snake.position[0].x * cellSize) + (headSize / 2) + padding;
    const radius = headSize / 2;

    this.context.beginPath();
    this.context.arc(position, position, radius, 0, 2 * Math.PI, false);
    this.context.fillStyle = config.styles.snake.fill;
    this.context.fill();
  }

  render() {
    this.drawGrid();
    this.drawSnake(this.game.snake);
  }
}
