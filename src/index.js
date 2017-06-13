import Game from './game';
import GameView from './game-view';

const game = new Game();
const gameView = new GameView(game);

gameView.render();
