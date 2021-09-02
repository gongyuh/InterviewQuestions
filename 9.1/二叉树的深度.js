function deepTree(root) {
  let res = 0;
  const dfs = (root, l) => {
    if (!root) return;
    if (root.left && root.right) {
      res = Math.max(res, l);
    }
    dfs(root.left, l + 1);
    dfs(root.left, l + 1);
  };
  dfs(root, l);
  return res;
}
