/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


/*
Accepted but maybe inefficient:
*/

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i += 1) {
        const first = nums[i];
        const second = target - first;
        if (nums.includes(second) && nums.indexOf(second) !== i) {
            return [nums.indexOf(first), nums.lastIndexOf(second)];
        }
    }
};
