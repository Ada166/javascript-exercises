const fibonacci = function(num) {
    if (typeof n2 === 'string') {
        return n2;
    }
    let n1 = 0;
    let n2 = 1;
    let sum;
    if (num === 1) {
        return n1;
    } else if (num === 2) {
        return n2;
    } else {
        for (let i = 2; i <= num; i++) {
            sum = n1 + n2;
            n1 = n2;
            n2 = sum;
        }
        return n2;
    }
};

// Do not edit below this line
module.exports = fibonacci;
