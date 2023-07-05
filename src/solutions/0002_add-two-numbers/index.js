/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

import {default as ListNode} from '../../utils/singlyLinkedListNode.js';

const addTwoNumbers = function(l1, l2) {
  console.log(l1.val)
  console.log(l1.next)

  console.log(l2.val)
  console.log(l2.next)
};

export default addTwoNumbers;
