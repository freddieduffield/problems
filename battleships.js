function findBoats(board) {
  let boats = {};
  const backwardsBoard = board.reverse();

  for (let i = 0; i < backwardsBoard.length; i++) {
    for (let j = 0; j < backwardsBoard[i].length; j++) {
      const currentItem = backwardsBoard[i][j];
      const location = [j + 1, i + 1];
      if (currentItem !== 0) {
        if (boats[currentItem]) {
          boats[currentItem].push(location);
        } else {
          boats[currentItem] = [location];
        }
      }
    }
  }
  
  return boats;

}

function checkForHit(boat, attacks) {
  let hits = [];

  const checkCoordinateMatch = (coordinates, testCase) =>
    coordinates[0] === testCase[0] && coordinates[1] === testCase[1];

  for (let attack = 0; attack < attacks.length; attack++) {
    for (let coordinate of boat) {
      if (checkCoordinateMatch(coordinate, attacks[attack])) {
        hits.push(coordinate);
      }
    }
  }

  if (hits.length === boat.length) {
    return 'SUNK';
  } else if (hits.length > 0 && hits.length < boat.length) {
    return 'DAMAGED';
  } else {
    return 'NOT_TOUCHED';
  }
}


function damagedOrSunk(board, attacks) {
  const boats = findBoats(board);
  let hits = []

  for (let boat of Object.values(boats)) {
    hits.push(checkForHit(boat, attacks));
  }

  const finalScores = {
    sunk: 0,
    damaged: 0,
    notTouched: 0,
    points: 0,
  };

  return hits.reduce((acc, curr) => {
    if (curr === 'DAMAGED') {
      acc.points += 0.5;
      acc.damaged++;
    } else if (curr === 'SUNK') {
      acc.points++;
      acc.sunk++;
    } else if (curr === 'NOT_TOUCHED') {
      acc.points -= 1;
      acc.notTouched++;
    }
    return acc;
  }, finalScores);
}

module.exports = {
  checkForAttack: checkForHit,
  damagedOrSunk,
  findBoats,
};
