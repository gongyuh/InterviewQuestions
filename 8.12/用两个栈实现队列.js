let stack1 = [];
let stack2 = [];

//push
function myPush() {
  stack1.push();
}

//pop
function myPop() {
  while (stack1.length > 0) {
    stack2.push(stack1.pop());
  }
  return stack2 || null;
}
