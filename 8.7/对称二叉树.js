//对称

function isSymmetrical(pRoot) {
  return isSymmetricalTree(pRoot, pRoot);
}

function isSymmetricalTree(node1, node2) {
  if (!node1 && !node2) {
    return true;
  }
  if (!node1 || !node2) {
    return false;
  }
  if (node1.val !== node2.val) {
    return false;
  }
  return (
    isSymmetricalTree(node.left, node.right) &&
    isSymmetricalTree(node.right, node.left)
  );
}

//镜像
function Mirror(root) {
  if (root) {
    const temp = root.right;
    root.left = root.right;
    root.right = temp;
    Mirror(root.right);
    Mirror(root.left);
  }
}
