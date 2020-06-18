/**
 * https://leetcode.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = new Map();
  nums.forEach((num) => {
    if (map.has(num)) {
      map.delete(num);
    } else {
      map.set(num, 1);
    }
  });

  let result;
  for (let key of map.keys()) {
    result = key;
  }
  return result;
};

const arr = [2, 2, 1];
const result = singleNumber(arr);
console.log(result);
