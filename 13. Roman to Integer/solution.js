/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const roman_dic = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if (i + 1 < s.length && roman_dic[s[i]] < roman_dic[s[i + 1]]) {
            sum -= roman_dic[s[i]]
        } else {
            sum += roman_dic[s[i]]
        }
    }
    return sum
};