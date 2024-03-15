/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = []
    for (let i = 1; i <= n; i++) {
        let a = i % 3 == 0
        let b = i % 5 == 0

        let map = {
            3: "Fizz",
            5: "Buzz"
        }

        let str = ""
        if (a) {
            str += map[3];
        } 
        if (b) {
            str += map[5];
        } 
        if (str.length == 0) {
            str += i.toString();
        }

        answer.push(str)
    }
    return answer;
};