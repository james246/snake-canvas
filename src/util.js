function rng(max) {
  return Math.floor((Math.random() * max));
}

function printGame(grid) {
  var s = '';
  for (var y = 0; y <= grid.length - 1; y++) {
    for (var x = 0; x <= grid[y].length - 1; x++) {
      s += '|' + (grid[x][y] ? grid[x][y] : ' ');
    }
    s += '\n';
  }
  console.log(s);
};

export {
  rng,
  printGame
};
