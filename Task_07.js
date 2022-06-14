function temperatureInCelsius(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  let message = cToFahr + ' \xB0F.';
    return(message);
}

function temperatureInFahrenheit(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let message = fToCel + '\xB0C.';
    return(message);
} 

console.log(temperatureInCelsius(60));
console.log(temperatureInFahrenheit(45));