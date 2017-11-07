const findMaxConsecutiveOnes = (nums) => {
  const consecutive1s = [];
  let seq = 0;
  nums.forEach((current, i) => {
    const next = nums[i + 1];
    if (current === 1) {
      seq += 1;
    }
    if (current === 0 || !next) {
      consecutive1s.push(seq);
      seq = 0;
    }
  });
  return Math.max(...consecutive1s);
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
