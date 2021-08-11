function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (map[target - cur] !== undefined) {
      return [map[target - cur], i];
    } else {
      map[cur] = i;
    }
  }
}
