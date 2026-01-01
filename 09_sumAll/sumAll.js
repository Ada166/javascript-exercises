const sumAll = function(sumAll) {
    let start = Math.min(start, end)
    let end = Math.max(start, end);
    if (Number.isInteger(start) && Number.isInteger(end) && start >= 0 && end >= 0) {
        sumAll = 0;
        for (let i = start; i <= end; i++) {
            sumAll += i;
        }
        return sumAll;
    }

};

module.exports = sumAll;
