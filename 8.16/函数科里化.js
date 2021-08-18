function curryingFun(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return (...args2) => curryingFun(fn, ...args, ...args2);
  }
}

function curryFun(fn, ...arg) {
  if (arg.length >= fn.length) {
    return curryingFun(...arg);
  } else {
    return (...arg2) => curryingFun(fn, ...arg, ...arg2);
  }
}
