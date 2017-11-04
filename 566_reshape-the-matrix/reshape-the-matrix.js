/*
Time complexity : O(m∗n).
We traverse over m*n elements twice.
Here, m and n refer to the number of rows and columns of the given matrix respectively.
*/
const matrixReshape = (nums, r, c) => {
  const originalR = nums.length;
  const originalC = nums[0].length;
  const result = [];

  if (r * c !== originalR * originalC) {
    return nums;
  }
  const interNums = nums.reduce((acc, row) => {
    row.forEach(num => acc.push(num));
    return acc;
  }, []);
  if (r === 1) {
    return [interNums];
  }
  for (let i = 0; i < interNums.length; i += c) {
    let newRow = [];
    for (let j = 0; j < c; j += 1) {
      newRow.push(interNums[i + j]);
    }
    result.push(newRow);
    newRow = [];
  }
  return result;
};

/*
[ [ 1, 2 ],
 [ 3, 4 ] ]
*/
console.log(matrixReshape(
  [[1, 2],
   [3, 4]], 2, 2,
));

/*
[ [ 1, 2, 3, 4, 5 ],
 [ 6, 7, 8, 9, 0 ] ]
*/
console.log(matrixReshape(
  [[1, 2],
   [3, 4],
   [5, 6],
   [7, 8],
   [9, 0]],
   2, 5,
));

export default matrixReshape;
