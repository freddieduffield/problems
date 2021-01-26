const plusOne = require('./plusOne');

describe('plusOne', () => {
  it('should return [1,0,0]', function () {
    expect(plusOne([9, 9])).toEqual([1, 0, 0]);
  });

  it('should return [1,0]', function () {
    expect(plusOne([9])).toEqual([1, 0]);
  });

  it('should return [1,2,3]', function () {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  it('should return [4,3,2,1]', function () {
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });
});
