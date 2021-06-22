function Parent(sex) {
    this.sex = sex
}

Parent.prototype.getSex = function () {
    return this.sex
}

function Son (sex,name) {
    Parent.call(this,sex)
    this.name = name
}

Son.prototype = Object.create(Parent.prototype)
Son.prototype.constructor = Son
let son = new Son('men','奥特曼')
console.log(son)
console.log(son.getSex())