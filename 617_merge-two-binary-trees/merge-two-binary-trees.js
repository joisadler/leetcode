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

// Iterative Algorithm:
//
// 1. Create a stack
// 2. Push the root nodes of both the trees onto the stack.
// 3. While the stack is not empty, perform following steps :
//   1. Pop a node pair from the top of the stack
//   2. For every node pair removed, add the values corresponding to the two nodes and update the value of the corresponding node in the first tree
//   3. If the left child of the first tree exists, push the left child(pair) of both the trees onto the stack.
//   4. If the left child of the first tree doesn’t exist, append the left child of the second tree to the current node of the first tree
//   5. Do same for right child pair as well.
//   6. If both the current nodes are NULL, continue with popping the next nodes from the stack.
// 4. Return root of updated Tree
const mergeTrees2 = (t1, t2) => {
  if (t1 === null) {
    return t2;
  }
  const stack = [];
  stack.push([t1, t2]);
  while (stack.length !== 0) {
    const t = stack.pop();
    if (t[0] === null || t[1] === null) {
      /* eslint no-continue: 0 */
      continue;
    }
    t[0].val += t[1].val;
    if (t[0].left === null) {
      t[0].left = t[1].left;
    } else {
      stack.push([t[0].left, t[1].left]);
    }
    if (t[0].right === null) {
      t[0].right = t[1].right;
    } else {
      stack.push([t[0].right, t[1].right]);
    }
  }
  return t1;
};

export { mergeTrees, mergeTrees2 };
