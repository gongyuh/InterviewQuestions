//基本实现
const flat = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flat(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};

//使用reduce简化
function flat(arr) {
  return arr.reduce((cur, target) => (Array.isArray(cur) ? target.concat(flat(cur)) : target.concat(cur)), []);
}
