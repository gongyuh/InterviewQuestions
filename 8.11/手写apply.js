Function.prototype.myApply = function (context = window,arg) {
    const fn = Symbol()
    context = context || window
    context[fn] = this
    const result
    if(Array.isArray(arg)) {
        result = context[fn](arg)
    }else {
        result = context[fn]()
    }
    return result
}