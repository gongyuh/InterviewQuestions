function flatten(arr) {
  let res = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res = res.concat(flatten(item));
    } else {
      res.push(item);
    }
  });
  return res;
}

//reduce
function flatten(arr) {
  return arr.reduce((res, item) => {
    Array.isArray(item) ? res.concat(flatten(item)) : res.concat(item);
  }, []);
}
