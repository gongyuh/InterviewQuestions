function isValid(s) {
  let stack = [];
  let map = new Map();
  map.set('(', ')');
  map.set('[', ']');
  map.set('{', '}');
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(s[i]);
    } else {
      const t = stack[stack.length];
      if (s[i] === map.get(t)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
