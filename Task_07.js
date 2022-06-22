function convertCelsiusToFahrenheit(celsius) 
{
  const fahrenheit = Math.round(celsius * 9 / 5 + 32);
    return(fahrenheit);
}

function convertFahrenheitToCelsius(fahrenheit) 
{
  const celsius = Math.round((fahrenheit - 32) * 5 / 9);
    return(celsius);
} 
console.log(convertCelsiusToFahrenheit(32));
console.log(convertFahrenheitToCelsius(62));