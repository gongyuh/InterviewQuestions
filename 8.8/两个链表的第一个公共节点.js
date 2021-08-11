function FindFirstCommonNode(head1, head2) {
  if (!head1 || !head2) return null;
  let len1 = getLength(head1);
  let len2 = getLength(head2);
  let long, short, interval;
  if (len1 > len2) {
    long = len1;
    short = len2;
    interval = len1 = len2;
  } else {
    long = len2;
    short = len1;
    interval = len2 - len1;
  }

  while (interval-- > 0) {
    long = long.next;
  }

  while (long) {
    if (long === short) {
      return long;
    }
    long = long.next;
    short = short.next;
  }
  return long;
}

function getLenth(head) {
  let cur = head;
  let len = 0;
  //这里的head没有去改变他
  while (cur) {
    len++;
    cur = cur.next;
  }
  return len;
}
