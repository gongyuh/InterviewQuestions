const unique = (num) => {
  let obj = {};
  return num.filter((item, index) => (obj.hasOwnProperty(item) ? false : (obj[item] = true)));
};

const unique = (num) => {
  return num.filter((item, index) => num.indexOf(item) === index);
};

const unique = (num) => {
  return num.filter((item) => num.indexOf(item) === num.lastIndexOf(item));
};

const unique = (num) => {
  [...new Set(num)];
};
