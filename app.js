async function fetchWeather(cityName) {
  const apiKey = "f8cce56a4919537da03fbe531f70f620";
  const city = cityName;
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=" +
    apiKey;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const pressure = data.main.pressure;
    const humidity = data.main.humidity;
    setData(temp, feelsLike, pressure, humidity);
  } else {
    console.log("error");
  }
}

function setData(temp, feelsLike, pressure, humidity) {
  var weatherText = document.createElement("p");
  weatherText.innerHTML =
    temp +
    "&deg" +
    "C" +
    "<br>" +
    "<span>" +
    "FeelsLike " +
    feelsLike +
    "&deg" +
    "C" +
    "</span>" +
    "<br>";
  var element = document.getElementById("weatherText");
  var elements = document.getElementById("image");
  const src = "https://www.flaticon.com/svg/vstatic/svg/869/869869.svg?token=exp=1612587869~hmac=847e603cdf73604ba565e70004365e6f";

  elements.setAttribute("src", src);
  element.appendChild(weatherText);
}

fetchWeather("Kathmandu");
