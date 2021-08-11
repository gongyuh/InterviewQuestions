function hasCircle(node) {
  while (p1 != p2) {
    let p1 = node.next;
    let p2 = node.next.next;
    if (p1 === null || p2 === null) {
      return false;
    }
    if (p1 === p2) {
      return true;
    }
  }
}
