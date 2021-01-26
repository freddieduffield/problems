/*
 * input array
 * output array
 * */
module.exports = (digits) => {
  return JSON.stringify(Number(digits.join('')) + 1)
    .split('')
    .map((x) => Number(x));
};
