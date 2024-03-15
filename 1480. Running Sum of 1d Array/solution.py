class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        runningSum = []
        for i in range(1, len(nums) + 1):
            runningSum.append(sum(nums[:i]))
        return runningSum