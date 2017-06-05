/**
 * @description Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *   You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var res = [];
    var i = 0;
    var j = 0;
    
    for(i=0;i< nums.length-1;i++) {
        for(j=i+1;j<nums.length;j++) {
            if(nums[i] + nums[j] == target) {
                res[0] = i;
                res[1] = j;
            }
        }
    }

    return res;
};
