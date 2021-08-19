function flatten(nums) {
  let res = [];
  nums.forEach((item) => {
    if (Array.isArray(item)) {
      //concat不会改变原来数据，只会返回一个数组的副本
      res = res.concat(flatten(num));
    } else {
      res.push(item);
    }
  });
  return res;
}

//使用reduce进行简化
function flatten(num) {
  return num.reduce((result, current) => {
    Array.isArray(current) ? result.concat(flatten(current)) : result.concat(current);
  }, []);
}
