function parentNode(root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }
  let left = parentNode(root.left, p, q);
  let right = parentNode(root.right, p, q);
  if (!left) return root.right;
  if (!right) return root.left;
  return root;
}
