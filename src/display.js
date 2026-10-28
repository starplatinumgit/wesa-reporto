import * as weather from "./weather.js";
import * as tools from "./tools.js";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const weatherDiv = document.getElementById("weather-div");
const daySelect = document.getElementById("day-select");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  await weather.set5DaysOfWeather(searchInput.value);
});

daySelect.addEventListener("change", (e) => {
  console.log(daySelect.value);
  renderDayWeather(daySelect.value);
});

const renderDayWeather = function (dayValue) {
  wipeDayWeather();
  let currentDay = weather.get1DayOfWeather(dayValue);
  for (let hour of currentDay.hours) {
    let hourCard = tools.createElement("div", "hour-card", weatherDiv);

    let timeDiv = tools.createElement("div", "time-div", hourCard);
    timeDiv.textContent = hour.datetime;

    let tempDiv = tools.createElement("div", "temp-div", hourCard);
    let tempP = tools.createElement("p", "hour-temp", tempDiv);
    let precipP = tools.createElement("p", "hour-precip", tempDiv);
    tempP.textContent = "temp: " + hour.temp;
    precipP.textContent = "chance of rain: " + hour.precipprob;
  }
};

const wipeDayWeather = function () {
  while (weatherDiv.firstChild) {
    weatherDiv.removeChild(weatherDiv.firstChild);
  }
};
