import config from './config';
import { generateGrid, generateSnake, plotSnake } from './game';
import { setupCanvas, drawGrid, drawSnake } from './render';
import { printGame } from './util';

let grid = generateGrid();
let snake = generateSnake();

let context = setupCanvas();

plotSnake(grid, snake);
drawGrid(context);
drawSnake(snake, context);

printGame(grid);
