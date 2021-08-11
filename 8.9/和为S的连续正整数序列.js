function FindContinuousSequence(sum) {
  let child = [1, 2];
  let res = [];
  let curSum = 3;
  let small = 1;
  let big = 2;
  while (big < sum) {
    while (curSum < sum && big < sum) {
      child.push(++big);
      curSum += big;
    }
    while (curSum > sum && small < big) {
      child.shift();
      curSum -= small;
    }
    while (curSum === sum && child.length > 1) {
      res.push(child.slice());
      child.push(++big);
      curSum += big;
    }
  }
  return res;
}

function FindContinuousSequence(sum) {
  let small = 1;
  let big = 2;
  let child = [1, 2];
  let res = [];
  let curSum = [];
  while (big < sum) {
    while (curSum < sum) {
      child.push(++big);
      curSum += big;
    }
    while (curSum > sum && small < big) {
      child.shift();
      curSum -= small;
    }
    while (curSum === sum) {
      res.push(child.slice());
      child += ++big;
      curSum += big;
    }
    return res;
  }
}

function FindContinuousSequence(sum) {
  let res = [];
  let child = [1, 2];
  let start = 1;
  let end = 2;
  let cur = 3;
}
