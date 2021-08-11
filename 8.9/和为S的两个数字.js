function FindNumbersWithSum(array, sum) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let s = array[left] + array[right];
    if (s < sum) {
      right++;
    } else if (s > sum) {
      left--;
    } else {
      return [array[left], array[right]];
    }
  }
  return [];
}
