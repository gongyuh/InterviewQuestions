function myInstanceof(left,right) {
    //定义右边函数的的显示原型链
  let prototype = right.prototype
  //定义左边的对象上的隐式原型链
  left = left.__proto__
  while (true) {
      //左边为null或者是undefined
    if (left === null || left ===)
      return false
      //右边的原型链是不是等于左边对象上的隐式原型
    if (prototype === left)
      return true
      //循环
    left = left.__proto__
  }
}
var a = {};
console.log(myInstanceof(a,Array)); //false
console.log(myInstanceof({}, Object)) //true
//这里的__proro__是两个下划线