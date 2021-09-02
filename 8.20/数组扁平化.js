function flatten(arr) {
  let res = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res.concat(flatten(item));
    } else {
      res.push(item);
    }
  });
  return res;
}

function flatten(arr) {
  return arr.reduce((item, res) => {
    Array.isArray(item) ? res.concat(flatten(item)) : res.push(item);
  }, []);
}
