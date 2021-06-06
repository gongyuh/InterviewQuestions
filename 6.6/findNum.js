var findRepeatNumber = function(nums) {
    let set = new Set();
    for(let i in nums){
        let curLength = set.size;
        set.add(nums[i]);
        if(curLength === set.size){
            return nums[i];
        }
    }
};