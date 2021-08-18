//call
Function.prototype.myCall = function (context, ...arg) {
  context = context || window;
  let fn = Symbol();
  context[fn] = this;
  const result = context[fn](...arg);
  delete context[fn];
  return result;
};

//apply
Function.prototype.myApply = function (context, arg) {
  context = context || window;
  let fn = Symbol();
  context[fn] = this;
  let result = context[fn](...arg);
  delete context[fn];
  return result;
};

//bind
Function.prototype.myBind = function (context, ...arg1) {
  const _this = this;
  return function F(...arg2) {
    return _this.myApply(context, arg1.concat(arg2));
  };
};
