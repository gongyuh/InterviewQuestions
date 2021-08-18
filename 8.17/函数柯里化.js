function curry(fn, ...arg) {
  if (arg.length >= fn.length) {
    return curry(...arg);
  } else {
    (...arg1) => {
      return curry(fn, ...arg, ...arg1);
    };
  }
}
