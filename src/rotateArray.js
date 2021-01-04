module.exports = (nums, k) => {
  // my solution
  // while(k > 0) {
  //   nums = [nums.pop(nums.length-1), ...nums];
  //   k--
  // }

  // brute force
  // k %= nums.length
  // let temp, previous;

  // for(let i = 0; i < k; i++) {
  //   previous = nums[nums.length -1]

  //   for(let j = 0; j < nums.length; j++) {
  //     temp = nums[j];
  //     nums[j] = previous;
  //     previous = temp
  //   }
  // }

  // using an extra array

  let a = [];

  for (let i = 0; i < nums.length; i++) {
    a[(i + k) % nums.length] = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = a[i];
  }

  return nums;
};
