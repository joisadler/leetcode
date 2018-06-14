/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const averageOfLevels = (node) => {
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
  return levels.map(l => l.reduce((a, b) => a + b) / l.length);
};


export default averageOfLevels;
