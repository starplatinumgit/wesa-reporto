export const get5DaysOfWeather = async function (countryName) {
  let weatherJson = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      countryName +
      "/next4days?key=9YNV997J74YLARMW63KAUGHJT&include=days,hours&elements=datetime,tempmax,tempmin,temp,precipprob,conditions",
  );
  let weatherObject = await weatherJson.json();
  return weatherObject;
};

export const printWeather = async function (countryName) {
  let weatherObject = await get5DaysOfWeather(countryName);
  console.log("Country: " + weatherObject.resolvedAddress);
  console.log("------------------------------------------------------");

  for (const day of weatherObject.days) {
    console.log(`Date: ` + day.datetime);
    console.log(`Min temp: ` + day.tempmin);
    console.log(`Max temp: ` + day.tempmax);
    console.log(`Precipitation: ` + day.precipprob);
    console.log(`Conditions: ` + day.conditions);
    console.log("------------------------------------------------------");
  }
};
