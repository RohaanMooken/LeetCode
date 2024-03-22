/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longest_prefix = "";
    let checks = 0;
    for (let i = 0; i < strs[0].length; i++) {
        let prefix = strs[0].substring(0, i + 1);
        strs.forEach((string) => {
            if (string.startsWith(prefix)) {
                checks += 1;
            } else {
                return longest_prefix;
            }
        })
        if (checks == (i + 1) * strs.length) {
            longest_prefix = prefix;
        }
    }
    return longest_prefix;
};