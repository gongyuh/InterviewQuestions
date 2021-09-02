function feibo(n) {
  if (n < 2) {
    return n;
  }
  let res1 = 0;
  let res2 = 1;
  for (let i = 2; i <= n; i++) {
    let t = res1;
    res1 = res2;
    res2 = res2 + t;
  }
  return res2;
}
