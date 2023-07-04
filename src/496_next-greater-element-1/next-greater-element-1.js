const nextGreaterElement = (findNums, nums) => {
  const result = [];
  findNums.forEach((number) => {
    const [head, ...rest] = nums.slice(nums.indexOf(number));
    const nge = rest.filter(element => element > head)[0] ?
      rest.filter(element => element > head)[0] : -1;
    result.push(nge);
  });
  return result;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(nextGreaterElement([2, 1, 3], [2, 3, 1])); // [3,-1,-1]

export default nextGreaterElement;
