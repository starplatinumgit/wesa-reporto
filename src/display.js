import * as weather from "./weather.js";
import * as tools from "./tools.js";

import snow from "./weather-icons/snow.svg";
import rain from "./weather-icons/rain.svg";
import fog from "./weather-icons/fog.svg";
import wind from "./weather-icons/wind.svg";
import cloudy from "./weather-icons/cloudy.svg";
import partlyCloudyDay from "./weather-icons/partly-cloudy-day.svg";
import partlyCloudyNight from "./weather-icons/partly-cloudy-night.svg";
import clearDay from "./weather-icons/clear-day.svg";
import clearNight from "./weather-icons/clear-night.svg";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const weatherDiv = document.getElementById("weather-div");
const daySelect = document.getElementById("day-select");
const todayDiv = document.getElementById("today-div");

searchForm.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    await weather.set5DaysOfWeather(searchInput.value);
    enableDaySelect();
    wipeDiv(weatherDiv);
    renderDayWeather(daySelect.value);
  } catch (error) {
    console.log(error + "hi");
    wipeDiv(weatherDiv);
    disableDaySelect();
  }
});

daySelect.addEventListener("change", (e) => {
  renderDayWeather(daySelect.value);
});

const enableDaySelect = function () {
  daySelect.disabled = false;
};

export const disableDaySelect = function () {
  daySelect.disabled = true;
};

const renderDayWeather = function (dayValue) {
  wipeDiv(weatherDiv);
  wipeDiv(todayDiv);

  let currentDay = weather.get1DayOfWeather(dayValue);

  let todayInfoDiv = tools.createElement("div", "today-info-div", todayDiv);
  let todayLocation = tools.createElement("p", "today-location", todayInfoDiv);
  let todayDate = tools.createElement("p", "today-date", todayInfoDiv);
  let todayMin = tools.createElement("p", "today-min", todayInfoDiv);
  let todayMax = tools.createElement("p", "today-max", todayInfoDiv);
  let todayPrecip = tools.createElement("p", "today-precip", todayInfoDiv);
  let todayConditions = tools.createElement(
    "p",
    "today-conditions",
    todayInfoDiv,
  );

  todayLocation.textContent = "location: " + weather.getCurrentLocation();
  todayDate.textContent = "date: " + currentDay.datetime;
  todayMin.textContent = "min temp: " + currentDay.tempmin;
  todayMax.textContent = "max temp: " + currentDay.tempmax;
  todayPrecip.textContent = "rain chance: " + currentDay.precipprob + "%";
  todayConditions.textContent = "conditions: " + currentDay.conditions;

  let weatherIconDiv = tools.createElement("div", "weather-icon-div", todayDiv);
  let weatherIcon = tools.createElement(
    "img",
    "weather-icon-svg",
    weatherIconDiv,
  );
  console.log(currentDay.icon);
  weatherIcon.src = weatherIcons[`${currentDay.icon}`];

  for (let hour of currentDay.hours) {
    let hourCard = tools.createElement("div", "hour-card", weatherDiv);

    let timeDiv = tools.createElement("div", "time-div", hourCard);
    timeDiv.textContent = hour.datetime;

    let tempDiv = tools.createElement("div", "temp-div", hourCard);
    let tempP = tools.createElement("p", "hour-temp", tempDiv);
    let precipP = tools.createElement("p", "hour-precip", tempDiv);
    tempP.textContent = "temp: " + hour.temp;
    precipP.textContent = "chance of rain: " + hour.precipprob + "%";
  }
};

const wipeDiv = function (div) {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};

const weatherIcons = {
  snow: snow,
  rain: rain,
  fog: fog,
  wind: wind,
  cloudy: cloudy,
  "partly-cloudy-day": partlyCloudyDay,
  "partly-cloudy-night": partlyCloudyNight,
  "clear-day": clearDay,
  "clear-night": clearNight,
};
