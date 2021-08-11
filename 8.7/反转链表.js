function reverseList(head) {
  let curNode = null;
  let headNode = head;
  while (head && head.next) {
    curNode = head.next;
    head.next = curNode.next;
    curNode.next = headNode;
    headNode = curNode;
  }
  return headNode;
}

function reverseList(head) {
  let curNode = null;
  let headNode = head;
  while (head && head.next) {
    curNode = head.next;
    head.next = curNode.next;
    curNode.next = headNode;
    headNode = curNode;
  }
  return headNode;
}
