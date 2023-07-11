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
  const iter = (l1, l2, carry) => {
    const currentTerm1 = l1?.val || 0
    const currentTerm2 = l2?.val || 0

    const sum = currentTerm1 + currentTerm2 + carry;
    const reminder = sum % 10
    const newCarry = Math.floor(sum / 10);

    const next1 = l1?.next;
    const next2 = l2?.next

    if (!next1 && !next2) {
      if (newCarry) {
        return new ListNode(reminder, new ListNode(newCarry, null));
      }
      return new ListNode(reminder, null);
    }
    return new ListNode(reminder, iter(next1, next2, newCarry));
  }

  return iter(l1, l2, 0);
}

export default addTwoNumbers;
