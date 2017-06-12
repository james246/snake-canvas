import config from './config';
import { generateGrid, plotSnake } from './game';
import Snake from './snake';
import { setupCanvas, drawGrid, drawSnake } from './render';
import { printGame } from './util';

let grid = generateGrid();
let snake = new Snake();

let context = setupCanvas();

plotSnake(grid, snake);
drawGrid(context);
drawSnake(snake, context);

printGame(grid);
