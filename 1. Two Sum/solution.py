class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_index_map = {}

        for i, num in enumerate(nums):
            num2 = target - num
            if num2 in num_index_map:
                return [num_index_map[num2], i]
            num_index_map[num] = i

        return []