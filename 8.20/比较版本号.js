function compareVersion(version1, version2) {
  let version1 = version1.split('.');
  let version2 = version2.split('.');
  let n = Math.max(version1.length, version2.length);
  for (let i = 0; i < n; i++) {
    let code1 = version1[i] === undefined ? 0 : parseInt(version1[i]);
    let code2 = version2[i] === undefined ? 0 : parseInt(version2[i]);
    if (code1 > code2) {
      return 1;
    } else {
      return -1;
    }
  }
  return 0;
}
