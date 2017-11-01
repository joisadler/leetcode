/*
Hash Table Approach, O(n)
*/

const singleNumber = (nums) => {
    const map = new Map();
    let result = 0;

    for (let i = 0; i < nums.length; i += 1) {
        const currentNum = nums[i];
        const counter = map.has(currentNum) ? 2 : 1;

        map.set(currentNum, counter);
    }
    map.forEach((value, key) => {
        if (value === 1) {
            result = key;
        }
    });
    return result;
};

export default singleNumber;
