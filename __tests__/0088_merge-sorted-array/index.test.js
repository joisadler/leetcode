import merge from '../../src/solutions/0088_merge-sorted-array';

const nums1 = [1,2,3,0,0,0];
const m = 3;
const nums2 = [2,5,6];
const n = 3;
const result1 = [1,2,2,3,5,6];

const nums3 = [1];
const m2 = 1;
const nums4 = [];
const n2 = 0;
const result2 = [1];

const nums5 = [0];
const m3 = 0;
const nums6 = [1];
const n3 = 1;
const result3 = [1];

test('merge is works correctly', () => {
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual(result1);

  merge(nums3, m2, nums4, n2);
  expect(nums3).toEqual(result2);

  merge(nums5, m3, nums6, n3);
  expect(nums5).toEqual(result3);
});
