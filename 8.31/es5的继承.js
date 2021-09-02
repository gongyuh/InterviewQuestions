//原型继承
function parent() {
  this.show = true;
  this.info = {
    age: 18,
    name: 'aaa'
  };
}
function children() {}

children.prototype = new parent();
let a = new children();

//构造继承
function parent() {
  this.show = true;
  this.info = {
    age: 18,
    name: 'aaa'
  };
}
function children() {
  parent.call(this);
}
