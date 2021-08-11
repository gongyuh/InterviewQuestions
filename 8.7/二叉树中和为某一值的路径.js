function FindPath(root, num) {
  const res = [];
  if (root) {
    FindPathCore(root, num, [], 0, res);
  }
  return res;
}

function FindPathCore(node, num, stack, sum, res) {
  stack.push(node.val);
  sum += node.val;
  if (!node.left && !node.right && sum === num) {
    res.push(stack.slice(0));
  }
  if (node.left) {
    FindPathCore(node.left, num, stack, sum, res);
  }
  if (node.right) {
    FindPathCore(node.right, num, stack, sum, res);
  }
  stack.pop();
}

//========================================
function FindPath(root, num) {
  let res = [];
  let sum = 0;
  let stack = [];
  if (root) {
    return FindPathCore(root, num, res, sum, stack);
  }
  return res;
}

function FindPathCore(node, num, res, sum, stack) {
  stack.push(node.val);
  if (!node.left && !node.right && sum === num) {
    res.push(stack.slice(0));
  }
  if (node.left) {
    FindPathCore(node.left, num, res, sum, stack);
  }
  if (node.right) {
    FindPathCore(node.right, num, res, sum, stack);
  }
  stack.pop();
}
