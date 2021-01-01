const damagedOrSunk = require('./damagedOrSunk');
describe.only('damagedOrSunk', () => {
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