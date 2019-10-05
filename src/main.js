import { API } from "./api";

export async function getWeatherInfo(options) {
  const api = new API();

  try {
    options.forecast == 0
      ? api.currConditions(options.city, options.units)
      : api.forecast(options.city, options.units, options.forecast);
  } catch (err) {
    console.log(err);
  }
}
