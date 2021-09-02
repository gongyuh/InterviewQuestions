function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }
  let res;
  if (Array.isArray(res)) {
    res = [];
  } else {
    res = obj;
  }

  for (let key in obj) {
    if (obj.hasProperty(key)) {
      res[key] = deepClone(obj[key]);
    }
  }
  return res;
}
