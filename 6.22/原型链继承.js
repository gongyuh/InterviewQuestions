function Parent (sex) {
    this.sex = sex ? sex : 'men'
}

Parent.prototype.getSex = function () {
    return this.sex
}

function Son (name) {
    this.name = name
}

//把父类的实例，赋值给原型上面去
Son.prototype = new Parent()
let son1 = new Son('超人')
console.log(son1.getSex())