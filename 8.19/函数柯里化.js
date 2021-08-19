function currying(fn, ...arg) {
  if (fn.length <= arg.length) {
    return fn(...arg);
  } else {
    (...arg2) => currying(fn, ...arg, ...arg2);
  }
}
