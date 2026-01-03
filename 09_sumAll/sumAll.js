const sumAll = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "ERROR";
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a < 0 || b < 0) return "ERROR";
        let min = Math.min(a, b);
        let max = Math.max(a, b);
        let sum = 0;
    for (let j = min; j <= max; j++) {
        sum = sum + j;
    }
    return sum;

}

module.exports = sumAll;
