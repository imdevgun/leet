/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */
var nums = [2,7,8,11]
var twoSum = function(nums, target) {
    var arr = [];
    for(let i = 0; i < nums.length; i++){
      for(let j = i + 1; j< nums.length; j++){
          if(nums[i] + nums[j] == target){
              arr.push(i);
              arr.push(j);
              return arr;
          }
      }
  }
};
console.log(twoSum(nums,9));