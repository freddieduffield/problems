const {bruteForce, peakValley} = require('./bestTimeToBuy');
describe('bestTimeToBuy', () => {
 
  describe.only('bruteForce', () => {
    describe('bruteForce', () => {
      it('should return 7 from [7,1,5,3,6,4]', () => {
        expect(bruteForce([7,1,5,3,6,4])).toEqual(7);
      });
      
      it('should return 8 from [3,1,3,4,5,9]', () => {
        expect(bruteForce([3,1,3,4,5,9])).toEqual(8);
      });
      
      it('should return 8 from [3,1,3,4,5,9]', () => {
        expect(bruteForce([3,1,3,4,5,9])).toEqual(8);
      });
    });
    
    describe('peakValley', () => {
      it('should return 7 from [7,1,5,3,6,4]', () => {
        expect(peakValley([7,1,5,3,6,4])).toEqual(7);
      });
      
      it('should return 8 from [3,1,3,4,5,9]', () => {
        expect(peakValley([3,1,3,4,5,9])).toEqual(8);
      });
      
      it('should return 8 from [3,1,3,4,5,9]', () => {
        expect(peakValley([3,1,3,4,5,9])).toEqual(8);
      });
    });
  });
});