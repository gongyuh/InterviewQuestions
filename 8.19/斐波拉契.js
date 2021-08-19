function Fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

//动态规划写法
function Fibonacci(n) {
  if (n < 2) {
    return n;
  }
  let i = 1;
  let pre = 0;
  let current = 1;
  let result = 0;
  while (i++ < n) {
    result = current + pre;
    pre = current;
    result = current;
  }
  return result;
}
