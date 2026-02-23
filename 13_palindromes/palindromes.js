const palindromes = function (string) {
    let cleaned = string;
    cleaned = cleaned.toLowerCase();
    cleaned = cleaned.replace(/\W/g, "");
    let reversed = cleaned.split("").reverse().join("");
    for (let i=0; i<string.length; i+=1) {
        if (cleaned !== reversed) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

// Write a for loop iterating thru each string letter and if the same then return true
// Needs to accept uppercase, numbers and unevenly spaced numbers
