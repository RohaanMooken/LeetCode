class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        strs.sort()
        prefix = ""
        for i in range(len(strs[0])):
            if strs[0][i] != strs[-1][i]:
                break
            prefix += strs[0][i]
        return prefix