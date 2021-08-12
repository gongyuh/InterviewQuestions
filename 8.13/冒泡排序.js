function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let complete = true;
    for (let j = i; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        complete = false;
      }
    }
    if (complete) {
      break;
    }
  }
}
