/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for (let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote[i];
        if (magazine.includes(char)) {
            magazine = magazine.replace(char, "");
        } else {
            return false;
        }
    }
    return true
};