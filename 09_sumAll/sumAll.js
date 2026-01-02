const sumAll = function(start, end) {
    start = Math.min(start, end) * 1;
    end = Math.max(start, end) * 1;
    if (typeof start !== 'number' || typeof end !== 'number') {
        return 'ERROR';
    }
    if (Number.isInteger(start) && Number.isInteger(end) && start >= 0 && end >= 0) {
        let sumAll = 0;
        for (let i = start; i <= end; i++) {
            sumAll += i;
        }
        return sumAll;
    } 
};

module.exports = sumAll;
