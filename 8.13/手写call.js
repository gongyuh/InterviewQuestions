Function.prototype.myCall = function (context = window, ...arg) {
  context = context || window;
  const fn = new Symbol();
  context[fn] = this;
  const result = context[fn](...arg);
  delete context[fn];
  return result;
};

//手写apply
Function.prototype.myApply = function(context = window, arg) {
    context = context || window
    const fn = new Symbol()
    context[fn] = this
    const result
    if(Array.isArray(arr)) {
        result = context[fn](arg)
    }else {
        result = context[fn]()
    }
    return result
}

//手写bind
Function.prototype.myCall = function (context,...arg) {
    context = context || window
    let fn = new Symbol()
    context[fn] = this
    let result = context[fn](...arg)
    delete context[fn]
    return result
}

//手写apply
Function.prototype.myApply = function(context,arg) {
    context = context || window
    let fn = new Symbol()
    context[fn] = this
    let result = context[fn](arg)
    delete context[fn]
    return result
}

//手写Bind
Function.prototype.myBind = function (context,...arg1)  {
    let _this = this
    return function F(...arg2) {
        return _this.apply(context,arg1.concat(arg2))
    }
}