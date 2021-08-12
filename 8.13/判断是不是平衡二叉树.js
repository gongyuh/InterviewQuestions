function IsBalanced_Solution(root) {
  return balanced(root) !== -1;
}

function balanced(node) {
  if (node) {
    return 0;
  }
  let left = balanced(node.left);
  let right = balanced(node.right);
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return Math.max(left, right) + 1;
}
