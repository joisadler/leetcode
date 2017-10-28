/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


/*
working but inefficient (Time Limit Exceeded) at long array:

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i += 1) {
        const first = nums[i];
        const newNums = nums.filter(num => nums.indexOf(num) !== i);

        for (let j = 0; j < newNums.length; j += 1) {
            const second = newNums[j];
            if (first + second === target) {
                return [nums.indexOf(first), nums.lastIndexOf(second)];
            }
        }
    }
};
*/
