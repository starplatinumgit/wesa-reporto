import * as weather from "./weather.js";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  weather.printWeather(searchInput.value);
});
