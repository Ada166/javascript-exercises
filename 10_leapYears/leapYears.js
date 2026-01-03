const leapYears = function(number) {
    let isLeap = false;
    if (number % 4 === 0) {
        isLeap = true;
        if (number % 100 === 0) {
            isLeap = false;
            if (number % 400 === 0) {
                isLeap = true;
            }
        }
    }
    return isLeap;
};

module.exports = leapYears;




//Create function 
//Need to create if statements for number of years to be divided by 4
//Leap years need to be divisible by 4 and 400