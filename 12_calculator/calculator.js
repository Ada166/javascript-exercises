const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a -b;
};

const sum = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let multiply = 1;
  for (let i = 0; i < arr.length; i++) {
    multiply *= arr[i];
  }
  return multiply;
};

const power = function(base, exp) {
	let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(num) {
	if (num === 0) return 1;
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
