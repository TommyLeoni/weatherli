import axios from "axios";
import stringInject from "stringinject";
import key from "./key";
import { currCoditionsOutput, forecastOutput } from "./output";

export class API {
  constructor() {
    this.apiKey = key();
  }

  async currConditions(city, units) {
    const reqUrl = stringInject(
      "https://api.openweathermap.org/data/2.5/weather?q={cityName}&APPID={apiKey}&units={units}",
      {
        cityName: city,
        apiKey: this.apiKey,
        units: units == "Kelvin" ? "" : String(units).toLowerCase()
      }
    );

    currCoditionsOutput(await axios.get(reqUrl), units);
  }

  async forecast(city, units, days) {
    const reqUrl = stringInject(
      "https://api.openweathermap.org/data/2.5/forecast?q={cityName}&APPID={apiKey}&cnt={cnt}&units={units}",
      {
        cityName: city,
        cnt: days,
        units: units.toLowerCase(),
        apiKey: this.apiKey
      }
    );

    forecastOutput(await axios.get(reqUrl), units);
  }
}
