function maxNum(arr, k) {
  let result = [];
  let window = [];
  for (let i = 0; i < arr.length; i++) {
    if (i - window[0] > k - 1) {
      window.shift();
    }
    let j = window.length;
    while (j >= 0 && arr[window[j]] < arr[i]) {
      j--;
      window.pop();
    }
    if (i >= k - 1) {
      result.push(arr[window[0]]);
    }
  }
  return result;
}
