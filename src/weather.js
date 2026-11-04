let currentWeatherObject = undefined;
let currentUnit = "metric";

const get5DaysOfWeather = async function (locationName) {
  let weatherJson = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      locationName +
      "/next4days?unitGroup=" +
      currentUnit +
      "&iconSet=icons1&key=9YNV997J74YLARMW63KAUGHJT&include=hours,days&elements=datetime,tempmax,tempmin,temp,precipprob,conditions,icon",
  );
  if (!weatherJson.ok) {
    throw new Error(weatherJson.status);
  }
  let weatherObject = await weatherJson.json();
  return weatherObject;
};

export const get1DayOfWeather = function (dayNum) {
  return currentWeatherObject.days[dayNum];
};

export const getCurrentLocation = function () {
  return currentWeatherObject.resolvedAddress;
};

export const set5DaysOfWeather = async function (locationName) {
  currentWeatherObject = await get5DaysOfWeather(locationName);
};

export const getCurrentWeatherTime = function () {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: currentWeatherObject.timezone,
    hour: "2-digit",
    hour12: false,
  });
  let currentTime = formatter.format(new Date());
  return currentTime;
};

export const toggleUnit = function () {
  if (currentUnit === "metric") {
    currentUnit = "us";
    return "°F";
  } else {
    currentUnit = "metric";
    return "°C";
  }
};

export const searchActive = function () {
  return currentWeatherObject;
};
