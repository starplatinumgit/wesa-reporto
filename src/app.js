import * as weather from "./weather.js";

export const runApp = async function () {
  await weather.printWeather("sydney");
};
