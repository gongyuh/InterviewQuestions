function levelFind(root) {
  if (!root) return null;
  const q = [[root, 0]];
  const res = [];
  while (q.length) {
    const { n, l } = q.shift();
    if (!res[l]) {
      res.push([n.val]);
    } else {
      [res[l].push([n.val])];
    }

    if (n.left) q.push([n.left, l + 1]);
    if (n.right) q.push([n.right, l + 1]);
  }
  return res;
}
