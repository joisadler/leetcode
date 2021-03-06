/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// BFS solution based on the solution of the "Average of Levels in Binary Tree" problem
const maxDepth = (node) => {
  if (!node) {
    return 0;
  }
  const queue = [];
  const queueStates = [];
  queue.push(node);
  while (queue.length > 0) {
    queueStates.push(queue.map(n => n.val));
    const currentNode = queue.shift();
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  let previousPassedElement = [queueStates[0]];
  let previousPassedElementIndex = 0;
  const levels = queueStates.filter((s, i, arr) => {
    if (i === 0) return true;
    if (i === previousPassedElement.length + previousPassedElementIndex) {
      previousPassedElement = arr[i];
      previousPassedElementIndex = i;
      return true;
    }
    return false;
  });
  return levels.length;
};

// Brilliant one-line solution, but not mine :(
/* eslint-disable no-confusing-arrow, max-len */
const maxDepth1 = node => (node === null) ? 0 : Math.max(maxDepth1(node.left), maxDepth1(node.right)) + 1;

export { maxDepth, maxDepth1 };
