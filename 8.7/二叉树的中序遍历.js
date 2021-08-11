//递归版本
let inOrder = (root, array = []) => {
  if (root) {
    inOrder(root.left, array);
    array.push(root);
    inOrder(root.right, array);
  }
  return array;
};

//非递归版本
let inOrder = (root) => {
  let res = [];
  let stack = [];
  let cur = root;
  if (cur || stack.length > 0) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    res.push(cur.val);
    cur = cur.right;
  }
  return res;
};
