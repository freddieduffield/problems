const intersectionOfTwoArrays = require('./intersectionOfTwoArrays');

describe('intersectionOfTwoArrays', function () {
    it('should return [2,2] given nums1 = [1,2,2,1], nums2 = [2,2]', function () {
        expect(intersectionOfTwoArrays([1,2,2,1], [2,2])).toEqual([2,2]);
    });

    it('should return [4,9] given nums1 = [4,9,5], nums2 = [9,4,9,8,4]', function () {
        expect(intersectionOfTwoArrays([4,9,5], [9,4,9,8,4])).toEqual([4,9]);
    });

    it('should return [1] given nums1 = [3,1,2], nums2 = [1,1]', function () {
        expect(intersectionOfTwoArrays([3,1,2], [1,1])).toEqual([1]);
    });
});

