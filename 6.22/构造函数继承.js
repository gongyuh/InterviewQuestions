function Parent(sex) {
    this.sex = sex;
}
Parent.prototype.getSex = function() {
    return this.sex;
}

function Son(sex, name) {
    Parent.call(this, sex)
    this.name = name
}
var son = new Son('men', '洛克王国')
console.log(son)
//构造函数的方式继承不了原型上面的属性
console.log(son.getSex())