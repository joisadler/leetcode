const qsort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const copy = arr.slice();
  const pivot = copy[0];
  const rest = copy.splice(0, 1);
  const less = copy.filter(item => item < pivot, rest);
  const greaterOrEqual = copy.filter(item => item >= pivot, rest);
  return [].concat(qsort(less), pivot, qsort(greaterOrEqual));
};

const arrayPairSum = (nums) => {
  if (nums.length === 2) {
    return Math.min(nums[0], nums[1]);
  }
  const sortedNums = qsort(nums);
  let sum = 0;
  for (let i = 1; i < sortedNums.length; i += 2) {
    const current = sortedNums[i];
    const previous = sortedNums[i - 1];
    const min = Math.min(previous, current);
    sum += min;
  }
  return sum;
};

export default arrayPairSum;
