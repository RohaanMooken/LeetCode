/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const num = target - nums[i];
        if (num in map) {
            return [i, map[num]];
        }
        map[nums[i]] = i;
    }
};