function threeSum(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (num[i] === nums[i + 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[i + 1];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        //为了能继续寻找，这个就要进行下一轮循环给他
        res.push([nums[i], nums[left++], nums[right--]]);
        while (nums[left] === nums[left - 1]) {
          left++;
        }

        while (nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }
  return res;
}
