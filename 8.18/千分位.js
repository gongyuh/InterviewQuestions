function toThousands(num) {
  let res = [];
  let count = 0;
  num = num.toString().split('');
  for (let i = num.length - 1; i >= 0; i--) {
    count++;
    res.unshift[num[i]];
    if (count % 3 === 0 && count >= 3) {
      res.unshift(',');
    }
  }
  return res.join('');
}

function toThousands(num) {
  num = num.split('');
  let count = 0;
  let res = [];
  for (let i = num.length - 1; i >= 0; i--) {
    ++count;
    res.unshift(num[i]);
    if (count % 3 === 0 && i >= 3) {
      res.unshift(',');
    }
  }
  return res.join('');
}
