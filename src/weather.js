let currentWeatherObject = undefined;

const get5DaysOfWeather = async function (locationName) {
  let weatherJson = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      locationName +
      "/next4days?unitGroup=metric&key=9YNV997J74YLARMW63KAUGHJT&include=hours,days&elements=datetime,tempmax,tempmin,temp,precipprob,conditions",
  );
  if (!weatherJson.ok) {
    throw new Error("Error: " + weatherJson.status);
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

// export const printWeather = async function (countryName) {
//   let weatherObject = await get5DaysOfWeather(countryName);
//   console.log("Country: " + weatherObject.resolvedAddress);
//   console.log("------------------------------------------------------");

//   for (const day of weatherObject.days) {
//     console.log(`Date: ` + day.datetime);
//     console.log(`Min temp: ` + day.tempmin);
//     console.log(`Max temp: ` + day.tempmax);
//     console.log(`Precipitation: ` + day.precipprob);
//     console.log(`Conditions: ` + day.conditions);
//     console.log("------------------------------------------------------");
//   }
// };

// export const printWeatherDay = async function (dayIndex) {
//   let currentWeatherDay = currentWeatherObject.days[dayIndex];
//   console.log(currentWeatherObject.resolvedAddress);
//   console.log("Date: " + currentWeatherDay.datetime);
//   console.log("Max Temp: " + currentWeatherDay.tempmax);
//   console.log("Min Temp: " + currentWeatherDay.tempmin);
//   console.log(`Precipitation: ` + day.precipprob);
//   console.log(`Conditions: ` + day.conditions);
//   console.log("------------------------------------------------------");

//   for (let hour of currentWeatherDay.hours) {
//     console.log(hour.datetime);
//     console.log(hour.temp);
//     console.log(hour.precipprob);
//     console.log("------------------------------------------------------");
//   }
// };
