import twoSum from '../../src/001_two-sum';

const arr1 = [2, 7, 11, 15];
const arr2 = [3, 3];
const arr3 = [3, 2, 4];
const arr4 = [-1, -2, -3, -4, -5];

test('twoSum is works correctly', () => {
  expect(twoSum(arr1, 9)).toEqual([0, 1]);
  expect(twoSum(arr2, 6)).toEqual([0, 1]);
  expect(twoSum(arr3, 6)).toEqual([1, 2]);
  expect(twoSum(arr4, -8)).toEqual([2, 4]);
});
