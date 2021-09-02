function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let target = arr[0];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < target) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([target], quickSort(right));
}
