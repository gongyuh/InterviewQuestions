function longString(s) {
  let maxLength = 0;
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) {
      set.add(s[i]);
      maxLength = Math.max(set.size, maxLength);
    } else {
      if (set.has(s[i])) {
        set.delete(s[j]);
        j++;
      }
      set.add(s[i]);
    }
  }
  return maxLength;
}
