//reduce
Array.reduce((target, index) => Math.max(target, index));

//Math.max
let arr = [1, 2, 4, 5, 6];
Math.max.apply(null, arr);
Math.max(...arr);
