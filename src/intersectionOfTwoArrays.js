/*
* Given two arrays find their intersection.
* */
const initialSolution = (nums1, nums2) => {
    const shortestArray = nums1.length > nums2.length ? nums2 : nums1;
    const longestArray = nums1.length > nums2.length ? nums1 : nums2;
    return shortestArray.reduce((acc, curr, i) => {
        const indexOfCurrInLongArray = longestArray.indexOf(curr);
        if (indexOfCurrInLongArray !== -1) {
            acc.push(...longestArray.splice(indexOfCurrInLongArray, 1));
        }

        return acc;
    }, []);
}

module.exports = (num1, num2) => {
    const lookupTable = num1.reduce((acc, curr) => {
        if (curr in acc) {
            acc[curr]++
        } else {
            acc[curr] = 1
        }
        return acc;
    }, {});

    let intersection = [];

    for (let num of num2) {
        if (lookupTable[num]) {
            lookupTable[num]--
            intersection.push(num);
        }
    }

    return intersection;
}
