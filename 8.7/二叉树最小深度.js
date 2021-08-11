function minDepth(pRoot) {
  if (!pRoot) {
    return 0;
  }
  if (!pRoot.left) {
    return 1 + minDepth;
  }
  if (!pRoot.right) {
    return 1 + minDepth;
  }
  return Math.min(minDepth(pRoot.left), minDepth(root.right)) + 1;
}
