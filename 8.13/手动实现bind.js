Function.prototype.myCall = function (context, ...arg1) {
  if (this === Function.prototype) {
    throw new TypeError('error');
  }
  let _this = this;
  return function F(...arg2) {
    return _this.apply(context, arg1.concat(arg2));
  };
};
