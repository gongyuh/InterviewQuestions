function FirstNotRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
      return i;
    }
  }
}

function FirstNotRepeatingChar(str) {
  if (!str) {
    return -1;
  }
  let countMap = {};
  let array = str.split("");
  for (let i = 0; i < str.length; i++) {
    let cur = array[i];
    let count = countMap[cur];
    if (count) {
      countMap[cur] = count + 1;
    } else {
      count = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (count === 1) {
      return i;
    }
  }
}
