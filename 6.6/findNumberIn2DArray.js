/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    let flag = false;
    for(let i=matrix.length;i>0;i--){
        if(matrix[i-1][0] === target) return true
        if(matrix[i-1][0]<target && matrix[i-1].includes(target)){
            flag = true;
            break;
        }
    }

    return flag;
};