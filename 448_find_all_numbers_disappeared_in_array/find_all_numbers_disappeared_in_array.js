/**
Beautiful but doesn't pass the time limit
*/
const findDisappearedNumbers = nums =>
  nums.sort((a, b) => a - b)
  .map((e, i) => i + 1)
  .filter(e => !nums.includes(e));

/**
// Accepted solution based on hash table. O(n)
*/
const findDisappearedNumbers2 = (nums) => {
  const completedNums = [];
  const presentNums = {};
  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    completedNums.push(i + 1);
    presentNums[nums[i]] = true;
  }
  for (let i = 0; i < completedNums.length; i += 1) {
    if (!presentNums[completedNums[i]]) {
      result.push(completedNums[i]);
    }
  }
  return result;
};

console.log(findDisappearedNumbers2([4, 3, 2, 7, 8, 2, 3, 1])); // [5, 6]  36  - 25 = 5 + 6 = 11
console.log(findDisappearedNumbers2([1, 1])); // [2] 3 2  3 -1
console.log(findDisappearedNumbers2([2, 2])); // [1]
console.log(findDisappearedNumbers2([1, 1, 2, 2])); // [3, 4]

export { findDisappearedNumbers, findDisappearedNumbers2 };
