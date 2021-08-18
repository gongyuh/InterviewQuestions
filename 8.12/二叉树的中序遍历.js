function inOrder(root) {
  const res = [];
  const stack = [];
  let cur = root;
  while (cur || stack.length > 0) {
    while (cur || stack.length > 0) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    res.push(cur.val);
    cur = cur.right;
  }
  return res;
}

function inorder(root) {
  const stack = [];
  const res = [];
  let cur = root;
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    res.push(cur.val);
    cur = cur.right;
  }
  return res;
}
