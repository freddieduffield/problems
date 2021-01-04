// input
// board = [[0,0,0,2,2,0],
// [0,3,0,0,0,0],
// [0,3,0,1,0,0],
// [0,3,0,1,0,0]];

// attacks = [[2, 1], [1, 3], [4, 2]];

// points 0.5 hit butt not sunk /  1 point whole boat sank, /  -1 not touched

// output
// {
//   sunk [of boats],
//   damaged,
//   notTouched,
//   points
// }
//

// find boats
// in - array of arrays
// out: [[x, y], [x, y], [x,y ]]
// check boats for attacks
// calcuate totalScore
const {checkForAttack, damagedOrSunk, findBoats} = require('./battleships');

describe('battleships', () => {
  describe('findBoats', () => {
    it('vertical', () => {
      const board = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ];

      const result = findBoats(board);

      expect(result).toEqual({
        1: [
          [2, 1],
          [2, 2],
          [2, 3],
        ],
      });
    });

    it('horizontal', () => {
      const board = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];

      const result = findBoats(board);

      expect(result).toEqual({
        1: [
          [1, 2],
          [2, 2],
          [3, 2],
        ],
      });
    });

    it('multiple boats', () => {
      const board = [
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [2, 2, 2],
      ];

      const result = findBoats(board);

      expect(result).toEqual({
        1: [
          [1, 2],
          [1, 3],
          [1, 4],
        ],
        2: [
          [1, 1],
          [2, 1],
          [3, 1],
        ],
      });
    });

    it('find boats for test case 2', () => {
      var board = [
        [3, 0, 1],
        [3, 0, 1],
        [0, 2, 1],
        [0, 2, 0],
      ];

      expect(findBoats(board)).toEqual({
        1: [
          [3, 2],
          [3, 3],
          [3, 4],
        ],
        2: [
          [2, 1],
          [2, 2],
        ],
        3: [
          [1, 3],
          [1, 4],
        ],
      });
    });
  });

  describe('checkForAttack', () => {
    // sunk: 0, damaged: 2 , notTouched: 1
    it('should return sunk if attack matches boat', () => {
      const boat = [
        [1, 1],
        [1, 2],
        [1, 3],
      ];

      expect(checkForAttack(boat, boat)).toEqual('SUNK');
    });

    it('should return damaged if hit', () => {
      const boat = [
        [1, 1],
        [1, 2],
        [1, 3],
      ];
      const attack = [[1, 1]];

      expect(checkForAttack(boat, attack)).toEqual('DAMAGED');
    });

    it('should return not touched if not touched', () => {
      const boat = [
        [1, 1],
        [1, 2],
        [1, 3],
      ];
      const attack = [[2, 2]];

      expect(checkForAttack(boat, attack)).toEqual('NOT_TOUCHED');
    });

    it('should handle multiple attacks', () => {
      const boat = [
        [1, 1],
        [1, 2],
        [1, 3],
      ];
      const attack = [
        [2, 2],
        [3, 2],
        [4, 2],
      ];

      expect(checkForAttack(boat, attack)).toEqual('NOT_TOUCHED');
    });
  });

  describe('damagedOrSunk', () => {
    it('should work for test case 1', () => {
      var board = [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
      ];

      var attacks = [
        [3, 1],
        [3, 2],
        [3, 3],
      ];
      var result = damagedOrSunk(board, attacks);

      expect(result.sunk).toEqual(1);
      expect(result.damaged).toEqual(0);
      expect(result.notTouched).toEqual(0);
      expect(result.points).toEqual(1);
    });

    it('should work for test case 2', () => {
      var board = [
        [3, 0, 1],
        [3, 0, 1],
        [0, 2, 1],
        [0, 2, 0],
      ];

      var attacks = [
        [2, 1],
        [2, 2],
        [3, 2],
        [3, 3],
      ];
      var result = damagedOrSunk(board, attacks);

      expect(result.sunk).toEqual(1);
      expect(result.damaged).toEqual(1);
      expect(result.notTouched).toEqual(1);
      expect(result.points).toEqual(0.5);
    });
  });
});
