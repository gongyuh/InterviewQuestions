function FindPath(root, expectNum) {
  let res = [];
  let sum = 0;
  let stack = [];
  if (root) {
    FindPathCore(root, expectNum, stack, sum, res);
  }
  return res;
}

function FindPathCore(root, expectNum, stack, sum, res) {
  stack.push(node.val);
  sum += node.val;
  if (!node.left && node.right && sum === expectNum) {
    return res.push(stack.slice(0));
  }
  if (root.left) {
    FindPathCore(root.left, expectNum, stack, sum, res);
  }
  if (root.right) {
    FindPathCore(root.right, expectNum, stack, sum, res);
  }
  stack.pop();
}
