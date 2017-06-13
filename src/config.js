export default {
  directions: { NORTH: 0, EAST: 1, SOUTH: 2, WEST: 3 },
  gridSize: 10,
  canvas: {
    height: 300,
    width: 300
  },
  styles: {
    grid: {
      lineWidth: 1,
      fill: 'grey'
    },
    snake: {
      fill: 'red'
    }
  },
  snake: {
    initialLength: 2
  }
};
