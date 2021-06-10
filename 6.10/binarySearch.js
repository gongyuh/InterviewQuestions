Array.prototype.binarySearch = function(item){
    //数组必须要满足排序的操作
    let low =0;
    let high=this.length-1;
    //要一直满足低位序列小于等于高位序列
    while(low<=high){
        //找到中间元素的序号
        const mid = Math.floor((low+high)/2);
        //中间值元素的值
        const element = this[mid];
        //中间元素的值要小于要搜索的值
        if(element<item){
            low=mid+1;
        } else if(element>item){
            high=mid-1;
        }else{
            return mid;
        }
    }
    return -1;
}

const res = [1,2,3,4,5].binarySearch(5);
console.log(res);