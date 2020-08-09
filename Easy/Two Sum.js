/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
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