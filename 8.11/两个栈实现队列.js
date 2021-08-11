let stack1 = [];
let stack2 = [];

function push(node) {
  stack1.push(node);
}

function pop() {
  while (stack1.length > 0) {
    stack2.push(stack1.pop());
  }
  return stack2.pop() || null;
}
