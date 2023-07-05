const moveZeroes = (nums) => {
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      zeroCount += 1;
      i -= 1;
    }
  }
  for (let i = 0; i < zeroCount; i += 1) {
    nums.push(0);
  }
};

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
// [1,3,12,0,0]

nums = [1, 0, 0, 1];
moveZeroes(nums);
console.log(nums);
// [1,1,0,0]

nums = [0, 0, 1];
moveZeroes(nums);
console.log(nums);
// [1,0,0]

export default moveZeroes;
