function temperatureInCelsius(celsius) 
{
  const fahrenheit = celsius * 9 / 5 + 32;
    return(fahrenheit);
}

function temperatureInFahrenheit(fahrenheit) 
{
  const celsius = (fahrenheit - 32) * 5 / 9;
    return(celsius);
} 

console.log(temperatureInCelsius(60));
console.log(temperatureInFahrenheit(45));