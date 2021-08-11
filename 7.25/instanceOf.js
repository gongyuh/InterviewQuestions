function myInstanceOf(left, right) {
  right = right.prototype;
  left = left._proto_;
  while (true) {
    if (left === null || left === undefined) {
      return false;
    }

    if (left === right) {
      return true;
    }

    left = left._proto_;
  }
}
