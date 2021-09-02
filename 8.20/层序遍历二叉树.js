function levelOrder(root) {
  if (!root) return [];
  let res = [];
  let q = [[root, 0]];
  while (q.length) {
    let [n, l] = q.shift();
    if (!res[l]) {
      res.push([n.val]);
    } else {
      res[l].push(n.val);
    }
    if (n.left) q.push([root.left, l + 1]);
    if (n.right) q.push([root.right, l + 1]);
  }
  return res;
}
