function KthNode(root, k) {
  const arr = [];
  const stack = [];
  let cur = root;
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    arr.push(cur.val);
    cur = cur.right;
  }
  return arr[k - 1];
}
