/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// Recursive approach
const trimBST = (root, l, r) => {
  if (!root) {
    return null;
  }
  if (root.val < l) {
    return trimBST(root.right, l, r);
  }
  if (root.val > r) {
    return trimBST(root.left, l, r);
  }
  /* eslint-disable no-param-reassign */
  root.left = trimBST(root.left, l, r);
  root.right = trimBST(root.right, l, r);
  return root;
};

export default trimBST;
