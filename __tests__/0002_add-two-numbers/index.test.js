import addTwoNumbers from '../../src/solutions/0002_add-two-numbers';
import arrayToSinglyLinkedList from '../../src/utils/arrayToSinglyLinkedList';

console.log(typeof addTwoNumbers)

const l1_1 = arrayToSinglyLinkedList([2,4,3]);
const l2_1 = arrayToSinglyLinkedList([5,6,4]);
const expectedOutput_1 = arrayToSinglyLinkedList([7,0,8]);

const l1_2 = arrayToSinglyLinkedList([0]);
const l2_2 = arrayToSinglyLinkedList([0]);
const expectedOutput_2 = arrayToSinglyLinkedList([0]);

const l1_3 = arrayToSinglyLinkedList([9,9,9,9,9,9,9]);
const l2_3 = arrayToSinglyLinkedList([9,9,9,9]);
const expectedOutput_3 = arrayToSinglyLinkedList([8,9,9,9,0,0,0,1]);

test('addTwoNumbers is works correctly', () => {
  expect(addTwoNumbers(l1_1, l2_1)).toEqual(expectedOutput_1);
  expect(addTwoNumbers(l1_2, l2_2)).toEqual(expectedOutput_2);
  expect(addTwoNumbers(l1_3, l2_3)).toEqual(expectedOutput_3);
});