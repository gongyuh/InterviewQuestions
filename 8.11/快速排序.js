function quickSort(num) {
  let left = [];
  let right = [];
  let target = num[0];
  for (let i = 1; i < num.length; i++) {
    if (target < num[i]) {
      right.push(num[i]);
    } else {
      left.push(num[i]);
    }
  }
  return quickSort(left).concat([target], quickSort(right));
}

let num = [7, 3, 5, 1, 2, 4];
console.log(quickSort(num));
