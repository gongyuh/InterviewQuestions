function minPathSum(grid) {
  let m = grid.length;
  let n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (m === 0 && n !== 0) {
        grid[i][j] += grid[i][j - 1];
      } else if (m !== 0 && n === 0) {
        grid[i][j] += grid[i - 1][j];
      } else if (m !== 0 && n !== 0) {
        grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
      }
    }
  }
  return grid[m - 1][n - 1];
}
