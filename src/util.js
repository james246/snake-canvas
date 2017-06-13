import config from './config';

const rng = (max) => {
  return Math.floor((Math.random() * max));
}

const printGame = (grid) => {
  var s = '';
  for (var y = 0; y <= grid.length - 1; y++) {
    for (var x = 0; x <= grid[y].length - 1; x++) {
      s += '|' + (grid[x][y] ? grid[x][y] : ' ');
    }
    s += '\n';
  }
  console.log(s);
};

const directionLogic = (direction, northFn, eastFn, southFn, westFn) => {
  switch (direction) {
    case config.directions.NORTH:
      northFn();
      break;
    case config.directions.EAST:
      eastFn();
      break;
    case config.directions.SOUTH:
      southFn();
      break;
    case config.directions.WEST:
      westFn();
      break;
    }
};

export {
  rng,
  printGame,
  directionLogic
};
