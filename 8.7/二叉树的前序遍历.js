//递归版本
let preOrder = (root, array = []) => {
  if (root) {
    array.push(root.val);
    preOrder(root.left, array);
    preOrder(root.right, array);
  }
  return array;
};
//非递归版本
let preOrder = (root) => {
  const res = [];
  const stack = [];
  const cur = root;
  while (current || stack.length > 0) {
    while (cur) {
      res.push(cur.val);
      stack.push(cur);
      cur = cur.left;
    }
    res.push(cur.val);
    cur = cur.right;
  }
  return res;
};

//递归版本
let preOrder = (root, array = []) => {
  if (root) {
    array.push(root.val);
    preOrder(root.left, array);
    preOrder(root.right, array);
  }
  return array;
};

let preOrder = (root) => {
  let res = [];
  let stack = [];
  let cur = root;
  if (cur || stack.length !== 0) {
    if (cur) {
      res.push(cur.val);
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();

    cur = cur.right;
  }
  return res;
};
