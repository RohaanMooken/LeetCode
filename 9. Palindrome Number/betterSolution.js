/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const s = x.toString();
    const r = s.split("").reverse().join("");

    if (r == s) {
        return true;
    } else {
        return false;
    }
};