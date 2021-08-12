function FindPath(root, expectNumber) {
  const result = [];
  let sum = 0;
  let stack = [];
  if (root) {
    FindPathCore(root, expectNumber, result, sum, stack);
  }
  return result;
}

function FindPathCore(node, expectNumber, result, sum, stack) {
  stack.push(node.val);
  sum += node.val;
  if (!node.left || !node.right || sum === expectNumber) {
    return result.push(stack.slice(0));
  }
  if (node.left) {
    FindPathCore(node.left, expectNumber, result, sum, stack);
  }
  if (node.right) {
    FindPathCore(node.right, expectNumber, result, sum, stack);
  }

  stack.pop();
}
