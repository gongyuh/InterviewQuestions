function maxSlidingWindow(nums, k) {
  let res = [];
  let window = [];
  for (let i = 0; i < nums.length; i++) {
    if (i - window[i] > k - 1) {
      window.shift();
    }
    let j = window.length;
    while (j >= 0 && nums[window[j]] <= nums[i]) {
      j--;
      window.pop();
    }
    if (i >= k - 1) {
      res.push(nums[window[0]]);
    }
  }
  return res;
}
