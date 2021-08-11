function FindGreatestSumOfSubArray(array) {
  let max = array[0];
  let sum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (sum > 0) {
      sum = sum + array[i];
    } else {
      sum = array[i];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
