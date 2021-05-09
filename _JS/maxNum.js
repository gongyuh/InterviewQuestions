function max(){
    //构造成类数组的形式
    let nums = Array.prototype.slice.call(arguments);
    //让最大值为0
    let max = 0;
    //遍历数组中的各个元素与最大值之间的比较
    nums.forEach(n=>{
        if(n>max){
            max = n;
        }
    })
    //最后要把值返回回来
    return max;
}

max(2,3,4,5,6)