function reConstructBinaryTree(pre, vin) {
  if (pre.length == 0) {
    return null;
  }
  if (pre.length == 1) {
    return new TreeNode(pre[0]);
  }

  const value = pre[0];
  const index = vin.indexOf(value);
  const preLeft = pre.slice(1, index + 1);
  const preRight = pre.slice(index + 1);
  const vinLeft = vin.slice(0, index);
  const vinRight = vin.slice(index + 1);
  const node = new TreeNode(value);
  node.left = reConstructBinaryTree(preLeft, vinLeft);
  node.right = reConstructBinaryTree(preRight, vinRight);
  return node;
}
