function preOrder(root) {
  let res = [];
  let stack = [];
  let cur = root;
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur.val);
      res.push(cur.val);
      cur = cur.left;
    }
    cur = stack.pop();
    cur = cur.right;
  }
  return res;
}
