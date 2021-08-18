//函数柯里化
function currying(fn, ...arg) {
  if (arg.length >= fn.length) {
    return fn(...arg);
  } else {
    return (...arg2) => currying(fn, ...arg, ...arg2);
  }
}
