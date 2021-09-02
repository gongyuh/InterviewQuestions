function unique(str) {
  let set = new Set();
  let maxLength = 0;
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (!set.has(str[i])) {
      set.add(str[i]);
      maxLength = Math.max(maxLength, set.size);
    } else {
      while (set.has(str[i])) {
        set.delete(str[j]);
        j++;
      }
      set.add(str[i]);
    }
  }
}
