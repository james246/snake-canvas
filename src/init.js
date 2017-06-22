import Game from './game';
import GameView from './game-view';

const game = new Game();
const gameView = new GameView(game);

gameView.render();

window.move = () => {
  game.snake.move();
  gameView.clear();
  gameView.render();
};
