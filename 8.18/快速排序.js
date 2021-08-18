//不稳定，时间空间复杂度为O(nlogn)
function quickSort(arr) {
  let left = [];
  let right = [];
  let cur = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > cur) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([cur], quickSort(right));
}

//插入 O(n2) 稳定
//冒泡 o(n2) 稳定
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let complete = true;
    for (let j = 0; j < arr.length - j - 1; j++) {
      if (arr[i + 1] > arr[i]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        complete = false;
      }
    }
    if (complete) {
      break;
    }
  }
  return arr;
}
//归并 o(nlogn) 稳定

//快速 o(nlogn) 不稳定
//堆排序 o(nlogn) 不稳定
//选择 o(n2) 不稳定
