const rotateArray = require('./rotateArray');

describe('rotateArray', () => {
  it('should rotate the array by three steps', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const result = rotateArray(array, 3);

    const expected = [5, 6, 7, 1, 2, 3, 4];

    expect(result).toEqual(expected);
  });
});
