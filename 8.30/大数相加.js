function bigNum(a, b) {
  let maxLen = Math.max(a.length, b.length);
  a = a.padStart(maxLen, 0);
  b = b.padStart(maxLen, 0);
  let flag = 0;
  let n = 0;
  let sum = '';
  for (let i = maxLen - 1; i >= 0; i++) {
    let t = a[i] + b[i] + flag;
    flag = (a[i] + b[i]) / 10;
    sum = sum + (t % 10);
  }
  if (flag === 1) {
    sum = '1' + sum;
  }
  return sum;
}
