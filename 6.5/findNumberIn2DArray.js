
var findNumberIn2DArray = function(matrix, target) {
  let flag = false
  //判断有多少行的二维矩阵
  for (let i = matrix.length; i > 0; i--) {
      //查找每行的第一个元素，判断是不是小于最小的那个数字
    if (matrix[i-1][0] <= target) {
        //满足最小的那个数字之后，查看这一列是不是包含目标的数字
      if (matrix[i-1].includes(target)) {
          //标志返回值改成true
        flag = true
          //结束循环
        i = -1
      }
    }
  }
  return flag
};


