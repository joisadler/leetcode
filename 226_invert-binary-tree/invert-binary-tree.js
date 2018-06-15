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
  let temp = new TreeNode();
  temp = invertTree(root.left);
  root.left = invertTree(root.right);
  root.right = temp;
  return root;
};

// Iterative, BFS-like approach
const invertTree1 = (root) => {
  if (!root) return null;
  const queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    const current = queue.shift();
    const temp = current.left;
    current.left = current.right;
    current.right = temp;
    if (current.left != null) queue.push(current.left);
    if (current.right != null) queue.push(current.right);
  }
  return root;
};

export { invertTree, invertTree1 };
