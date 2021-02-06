async function fetchWeather(cityName) {
  const apiKey = "18bdd88c401e35a13f312b64ea151cef";
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
    const country = data.name;
    setData(temp, feelsLike, pressure, humidity, country);
  } else {
    console.log("error");
  }
}

function setData(temp, feelsLike, pressure, humidity, country) {
  var tempr = document.getElementById("temprature");
  tempr.innerHTML = temp + "&deg" + "C";

  var feel = document.getElementById("feelsLike");
  feel.innerHTML = "Feels Like: " + feelsLike + "&deg" + "C";

  let countryName = document.getElementById("countryName");
  countryName.innerHTML = country;

  var element = document.getElementById("weatherText");
  var elements = document.getElementById("image");
  let src = null;
  if (temp < 5) {
    src =
      "https://www.flaticon.com/svg/vstatic/svg/2938/2938107.svg?token=exp=1612590663~hmac=6f8e27c3dcb18faa4e38fbf12347b400";
    console.log(src);
  } else if (temp < 15) {
    src =
      "https://www.flaticon.com/svg/vstatic/svg/2932/2932604.svg?token=exp=1612590874~hmac=ab57afee9d40e313f724774fac89dace";
  } else if (temp >= 15) {
    src =
      "https://www.flaticon.com/svg/vstatic/svg/2917/2917242.svg?token=exp=1612603249~hmac=71573dd632780f93a046305407af1020";
  }
  elements.setAttribute("src", src);
  element.appendChild(weatherText);
}

newElement = document.getElementById("search");
newElement.addEventListener("click", getInput);
function getInput() {
  var inputValue = "Kathmandu";
  var inputValue = document.getElementById("myInput").value;
  fetchWeather(inputValue);
}

getInput();
