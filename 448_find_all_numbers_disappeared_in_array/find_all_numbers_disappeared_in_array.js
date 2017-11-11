/**
Beautiful but doesn't pass the time limit
*/
const findDisappearedNumbers = nums =>
  nums.sort((a, b) => a - b)
  .map((e, i) => i + 1)
  .filter(e => !nums.includes(e));

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5, 6]
console.log(findDisappearedNumbers([1, 1])); // [2]
