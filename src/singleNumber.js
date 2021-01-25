/*
given an array of numbers, each number repeats twice, except one return that one

[2,2,1]
-> 1
[1]
-> 1
[4,1,2,1,2]
-> 4
[1]
-> 1

1. sort array in order
2. iterate through array
3. if first occurance,  check if current equals prev
*/

/*
// My solution
module.exports = (numbers) => {
    numbers.sort((a,b)=> a-b);
    let j = 1;
    for(let i = 0; i < numbers.length; i+=2 ){
        if (numbers[i] !== numbers[j] || !numbers[j]) {
            return numbers[i];
        }

        j+=2;
    }
}
*/

/*
List Operation approach:
1. Iterate over numbers
2a. if current number is not in the no duplicates list, add it
2b. else if it in no duplicates list remove it
3. return the first (only) item in the no duplicates list.

time complexity: 0(n^2)
space complexity: 0(n)
 */
const listOperation = (nums) => {
    let noDuplicates = [];

    for (let i = 0; i < nums.length; i++) {
        const noDupsIndexOfCurrent = noDuplicates.indexOf(nums[i])

        if (noDupsIndexOfCurrent === -1) {
            noDuplicates.push(nums[i]);
        } else {
            noDuplicates.splice(noDupsIndexOfCurrent, 1);
        }
    }

    return noDuplicates[0];
}

/*
* hash table approach :
* 1. iterate through all numbers and count in hash table
* 2. return the only one that occurs once
* */

const hashTable = (nums) => {
    const hashCount = nums.reduce((acc, curr) => {
        if (curr in acc) {
            acc[curr]++
        } else {
            acc[curr] = 1;
        }
        return acc;
    }, {});

    return Number(
        Object
            .keys(hashCount)
            .find(key => hashCount[key] === 1)
    );
}

/*
* Math
* 2∗(a+b+c)−(a+a+b+b+c)=c
*
* time: 0(n + n) = 0(n)
* space: 0(n + n) = 0(n) set needs space of all elements in nums
* */
const maths = (nums) => {
    let sumOfSet = 0;
    let sumOfNums = 0;
    const set = new Set();

    for(let num of nums) {
        if(!set.has(num)) {
            set.add(num);
            sumOfSet += num;
        }

        sumOfNums += num;
    }

    return 2 * sumOfSet - sumOfNums;
}

/*
* Bit Manipulation:
* If we take XOR of zero and some bit, it will return that bit
* If we take XOR of two same bits, it will return 0
* a⊕b⊕a=(a⊕a)⊕b=0⊕b=b
* So we can XOR all bits together to find the unique number.
* */

module.exports = (nums) => {
 let a = 0;
 for(let i of nums) {
     a ^= i;
 }

 return a;
}
