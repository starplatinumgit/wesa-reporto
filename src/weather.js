export const set5DaysOfWeather = async function (countryName) {
  try {
    let weatherJson = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        countryName +
        "/next4days?key=9YNV997J74YLARMW63KAUGHJT&include=hours,days&elements=datetime,tempmax,tempmin,temp,precipprob,conditions",
    );
    let weatherObject = await weatherJson.json();
    setCurrentWeatherObject(weatherObject);
    console.log(currentWeatherObject);
  } catch (error) {
    console.log(error);
  }
};

let currentWeatherObject = undefined;

export const get1DayOfWeather = function (dayNum) {
  return currentWeatherObject.days[dayNum];
};

export const setCurrentWeatherObject = function (weatherObject) {
  currentWeatherObject = weatherObject;
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
