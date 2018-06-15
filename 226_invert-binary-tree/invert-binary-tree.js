/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// Recursive approach
/* eslint-disable no-undef, no-param-reassign */
const invertTree = (root) => {
  if (!root) return null;
  let tmp = new TreeNode();
  tmp = invertTree(root.left);
  root.left = invertTree(root.right);
  root.right = tmp;
  return root;
};
