var twoSum = function (nums, target) {
  //iterate through array
  //if nums[i] + nums[j] = target then return [i,j]
  //if nums[i] + nums[j]!= target then continue
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return []
};

nums = [2, 7, 11, 15];
target = 9;
console.log(twoSum(nums, target))
