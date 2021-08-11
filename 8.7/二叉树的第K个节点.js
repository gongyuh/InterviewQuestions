//排序后的节点就是相当于中序遍历的方式
function KthNode(pRoot, k) {
  let stack = [];
  let res = [];
  let cur = pRoot;
  if (cur || stack.length > 0) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    res.push(cur.val);
    cur = cur.right;
  }
  if (k > 0 && k <= Array.length) {
    return arr[k - 1];
  }
  return null;
}
