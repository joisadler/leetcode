/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// Recursive Algorithm:
//
// 1. Traverse the tree in Preorder fashion
// 2. Check if both the tree nodes are NULL
//   1. If not, then update the value
// 3. Recur for left subtrees
// 4. Recur for right subtrees
// 5. Return root of updated Tree
const mergeTrees = (t1, t2) => {
  if (!t1) {
    return t2;
  }
  if (!t2) {
    return t1;
  }
  /* eslint no-param-reassign: 0 */
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};
