function Merge(head1, head2) {
  if (!head1) {
    return head2;
  }
  if (!head2) {
    return head1;
  }
  let head;
  if (head1.val < head2.val) {
    head = head1;
    head.next = Merge(head1.next, head2);
  } else {
    head = head2;
    head.next = Merge(head1, head2.next);
  }
  return head;
}
