const apikey = "852ff1cad6d3220f41187d4bbf793c60";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const error = document.querySelector(".error");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    error.style.display = "block";
    document.querySelector(".weather").style.display = "none";
    return;
  }
  var data = await response.json();

  //console.log(response);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./img/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./img/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./img/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "./img/mist.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./img/clear.png";
  }
  document.querySelector(".weather").style.display = "block";
  error.style.display = "none";
}

searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
