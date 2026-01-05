const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5/9);
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * (9/5)) + 32;
  return Number(fahrenheit.toFixed(1));
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


//Celsius = 0 / Fahrenheit = 32