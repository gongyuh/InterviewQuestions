function EntryNodeOfLoop(head) {
  if (!head || !head.next) {
    return null;
  }
  let p1 = head.next;
  let p2 = head.next;
  while (p1 != p2) {
    if (p1.next === null || p2.next === null) {
      return null;
    }
    p1 = p1.next;
    p2 = p2.next.next;
  }
  let len = 1;
  let temp = p1;
  while (temp != p1) {
    len++;
    p1 = p1.next;
  }
  //公共节点
  p1 = p2 = head;
  while (len-- > 0) {
    p2 = p2.next;
  }
  while (p1 != p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
}
