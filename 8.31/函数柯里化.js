function curry(fn, ...arg) {
  if (fn.length <= arg.length) {
    return fn(...arg);
  } else {
    (arg2) => {
      return curry(fn, ...arg, ...arg2);
    };
  }
}
