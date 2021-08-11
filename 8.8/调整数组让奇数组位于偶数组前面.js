function reOrderArray(array) {
  if (Array.isArray) {
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
      while (array[start] % 2 === 1) {
        start++;
      }
      while (array[end] % 2 === 0) {
        end--;
      }
      [array[start], array[end]] = [array[end], array[start]];
    }
    return array;
  }
}
