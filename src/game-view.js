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

  renderGrid() {
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

  renderSnake() {
    const cellSize = config.canvas.width / config.gridSize;

    const headSize = cellSize * 0.8;
    const tailSize = headSize * 0.8;

    const getPadding = itemSize => (cellSize - itemSize) / 2;
    const getRadius = itemSize => itemSize / 2;

    const getCanvasCoordinate = (gridCoordinate, itemSize, itemPadding) =>
      (gridCoordinate * cellSize) + (itemSize / 2) + itemPadding;

    for (let i = 0; i <= this.game.snake.position.length - 1; i++) {
      this.context.beginPath();

      const point = this.game.snake.position[i];

      const itemSize = (i === 0 ? headSize : tailSize);
      const radius = getRadius(itemSize);
      const padding = getPadding(itemSize);

      this.context.arc(
        getCanvasCoordinate(point.x, itemSize, padding),
        getCanvasCoordinate(point.y, itemSize, padding),
        radius,
        0, 2 * Math.PI, false
      );

      this.context.fillStyle = config.styles.snake.fill;
      this.context.fill();
    }
  }

  render() {
    this.renderGrid();
    this.renderSnake();
  }
}
