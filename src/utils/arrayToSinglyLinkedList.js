import {default as ListNode} from './singlyLinkedListNode.js';

export default arr => {
  let head = null;
  let current = null;
  arr.forEach((val, index) => {
    if (index === 0) {
      head = new ListNode(val);
      current = head;
    } else {
      current.next = new ListNode(val);
      current = current.next;
    }
  });
  return head;
}