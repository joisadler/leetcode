const containsDuplicate = (nums) => {
  if (nums.length <= 1) return false;
  for (let i = 0; i <= nums.length - 1; i += 1) {
    if (nums.slice(0, i).includes(nums[i])) return true;
  }
  return false;
};

export default containsDuplicate;
