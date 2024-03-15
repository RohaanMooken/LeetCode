/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString();
    const length = str.length;
    let checks = 0;
    for (let i = 0; i < length; i++) {
        if (str[i] == str[length - i - 1]) {
            checks++;
        }
    }
    if (checks == length) {
        return true;
    } else {
        return false;
    }
};