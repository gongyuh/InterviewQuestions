//前序
const preOrder = (root) => {
  const stack = [root];
  while (stack.length) {
    let n = stack.pop();
    console.log(n.val);

    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
};

//中序
const inOrder = (root) => {
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    let n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
};
