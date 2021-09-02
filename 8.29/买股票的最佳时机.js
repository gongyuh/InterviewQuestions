function bestTime(arr) {
  let profit = 0;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    profit = Math.min(min, arr[i] - profit);
    if (min > profit[i]) {
      min = profit[0];
    }
  }
  return profit;
}
