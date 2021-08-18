function preOrder(root) {
  let stack = [];
  let res = [];
  let cur = root;
  while (cur || stack.length > 0) {
    while (cur) {
      res.push(cur.val);
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    res.push(cur.val);
    cur = cur.right;
  }
  return res;
}
