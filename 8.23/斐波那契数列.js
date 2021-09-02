function feibo(n) {
  if (n === 1) return 1;
  if (n === 0) return 0;
  let n1 = 0;
  let n2 = 1;
  for (let i = 2; i <= n; i++) {
    let t = n1;
    n1 = n2;
    n2 = t + n2;
  }
  return n2;
}
