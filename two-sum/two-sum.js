/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


/*
Brute force method, accepted but inefficient, O(n)^2
*/

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i += 1) {
        const first = nums[i];
        const second = target - first;
        if (nums.includes(second) && nums.indexOf(second) !== i) {
            return [nums.indexOf(first), nums.lastIndexOf(second)];
        }
    }
    throw new Error('No two sum solution');
};

/*
Approach #2 (Two-pass Hash Table), O(n)
*/

const twoSum2 = (nums, target) => {
    const hash = new Map();

    for (let i = 0; i < nums.length; i += 1) {
        const value = nums[i];
        const index = i;
        hash.set(value, index);
    }
    for (let i = 0; i < nums.length; i += 1) {
        const firstNumber = nums[i];
        const firstNumberIndex = i;
        const complement = target - firstNumber;
        const complementIndex = hash.get(complement);

        if (hash.has(complement) && complementIndex !== firstNumberIndex) {
            return [firstNumberIndex, complementIndex];
        }
    }
    throw new Error('No two sum solution');
};
