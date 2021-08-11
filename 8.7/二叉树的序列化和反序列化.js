function Serialize(pRoot, arr = []) {
  if (!pRoot) {
    arr.push("#");
  } else {
    arr.push(pRoot.val);
    Serialize(pRoot.left, arr);
    Serialize(pRoot.right, arr);
  }
  return arr.join(",");
}

function Deserialize(s) {
  if (!s) {
    return null;
  }
  return deserialize(s.split(","));
}

function deserialize(arr) {
  let node = null;
  let cur = arr.shift();
  if (cur !== "#") {
    node = { val: cur };
    node.left = deserialize(arr);
    node.right = deserialize(arr);
  }
  return;
}
