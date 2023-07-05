/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(N)
const twoSum = function (nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i += 1) {
    const current = nums[i];
    const complement = target - current;
    if (hash[current] !== undefined) {
      return [hash[current], i];
    }
    hash[complement] = i;
  }
};

export default twoSum;
