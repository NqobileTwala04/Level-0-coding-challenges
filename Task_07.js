function convertCelsiusToFahrenheit(celsius) 
{
  const fahrenheit = celsius * 9 / 5 + 32;
    return(fahrenheit);
}

function convertFahrenheitToCelsius(fahrenheit) 
{
  const celsius = Math.round(fahrenheit - 32) * 5 / 9;
    return(celsius);
} 
