module.exports = function damagedOrSunk(board, attacks) {
  
  // count the number of ships and record their length
  let ships = {}
  board.forEach((x, i) => x.forEach((y, j) => {
    let cell = board[i][j];
    if(cell) {
      ships[cell] = ++ships[cell] || 1;
    }
  }));

  // remove attacks
  let state = Object.assign({}, ships);
  for(let [x, y] of attacks) {
    let cell = board[board.length-y][x-1];
    if(cell && state[cell]) {
      state[cell] -= 1;
    }
  }

  // get totals
  let sunk = Object.keys(state).filter(x => state[x] == 0).length;
  let damaged = Object.keys(state).filter(x => state[x] != ships[x]).length - sunk;
  let notTouched = Object.keys(ships).length-sunk-damaged;

  return {sunk, damaged, notTouched, points: sunk-notTouched+damaged*0.5}  

};
