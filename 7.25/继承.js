function parent() {
  this.sex = 'man';
}

parent.prototype.getSex = function () {
  return this.sex;
};

function son(name) {
  this.name = name;
}

son.prototype = new parent();
//
let son1 = new parent('xxx');
console.log(son1.getSex());
