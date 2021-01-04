const {bruteForce, peakValley, simpleOnePass} = require('./bestTimeToBuy');

describe('bestTimeToBuy', () => {
  describe('bruteForce', () => {
    describe('bruteForce', () => {
      it('should return 7 from [7,1,5,3,6,4]', () => {
        expect(bruteForce([7, 1, 5, 3, 6, 4])).toEqual(7);
      });

      it('should return 8 from [3,1,3,4,5,9]', () => {
        expect(bruteForce([3, 1, 3, 4, 5, 9])).toEqual(8);
      });

      it('should return 4 from [1,2,3,4,5]', () => {
        expect(bruteForce([1, 2, 3, 4, 5])).toEqual(4);
      });
    });

    describe('peakValley', () => {
      it('should return 7 from [7,1,5,3,6,4]', () => {
        expect(peakValley([7, 1, 5, 3, 6, 4])).toEqual(7);
      });

      it('should return 4 from [1,2,3,4,5]', () => {
        expect(peakValley([1, 2, 3, 4, 5])).toEqual(4);
      });
    });

    describe('simpleOnePass', () => {
      it('should return 7 from [7,1,5,3,6,4]', () => {
        expect(simpleOnePass([7, 1, 5, 3, 6, 4])).toEqual(7);
      });

      it('should return 4 from [1,2,3,4,5]', () => {
        expect(simpleOnePass([1, 2, 3, 4, 5])).toEqual(4);
      });
    });
  });
});
