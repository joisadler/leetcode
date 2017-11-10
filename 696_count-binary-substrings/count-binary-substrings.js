/**
Probably, working solution, but does not pass the time limit on very large inputs (more than 10000 characters).
O(n^2)?
*/
const countBinarySubstrings = (s) => {
  const nums = s.split('').map(e => Number(e));
  let count = 0;

  for (let sliceLength = 2; sliceLength <= nums.length; sliceLength += 2) {
    for (let i = 0, j = i + sliceLength; j <= nums.length; i += 1, j += 1) {
      const slice = nums.slice(i, j);
      const part1 = slice.slice(0, slice.length / 2);
      const part2 = slice.slice(slice.length / 2, slice.length);
      if (part1.length === part2.length &&
        ((part1.filter(e => e === 0).length === part1.length &&
          part2.filter(e => e === 1).length === part2.length) ||
         (part1.filter(e => e === 1).length === part1.length &&
          part2.filter(e => e === 0).length === part2.length))) {
        // console.log(`slice: ${slice}`)
        // console.log(`part1: ${part1}`)
        // console.log(`part2: ${part2}`)
        count += 1;
      }
    }
  }
  return count;
};

/**
Short and easy O(n) accepted solution, not mine :(((
*/
const countBinarySubstrings2 = (s) => {
  let ans = 0;
  let prev = 0;
  let cur = 1;
  for (let i = 1; i < s.length; i += 1) {
    if (s[i - 1] !== s[i]) {
      ans += Math.min(prev, cur);
      prev = cur;
      cur = 1;
    } else {
      cur += 1;
    }
  }
  return ans + Math.min(prev, cur);
};

console.log(countBinarySubstrings('00110011')); // 6
console.log(countBinarySubstrings('000111000')); // 6
console.log(countBinarySubstrings('10101')); // 4
console.log(countBinarySubstrings('00110')); // 3

export { countBinarySubstrings, countBinarySubstrings2 };
