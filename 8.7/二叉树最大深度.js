function TreeDepth(pRoot) {
  return !pRoot
    ? 0
    : Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right)) + 1;
}
