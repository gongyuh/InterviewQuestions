function MoreThanHalfNum_Solution(nums) {
  let length = nums.length;
  let temp = {};
  for (let i = 0; i < length; i++) {
    if (temp[nums[i]] !== undefined) {
      temp[nums[i]]++;
    } else {
      temp[nums[i]] = 1;
    }
    if (temp[nums[i]] > length / 2) {
      return nums[i];
    }
  }
}
