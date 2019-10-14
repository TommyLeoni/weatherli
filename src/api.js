import axios from "axios";
import stringInject from "stringinject";
import key from "./key";
import emoji from "node-emoji";
import flags from "emoji-flags";
import chalk from "chalk";
import { TemperatureBlock } from "./components/temperatureBlock";
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

    /*const response = await axios.get(reqUrl);
    const output = [];
    output.push(emoji.get("flag-" + response.data.sys.country.toLowerCase()));
    output.push(
      TemperatureBlock(
        response.data.main.temp,
        units,
        response.data.main.humidity
      )
    );

    output.forEach(line => {
      console.log(line);
    });

    //console.log(response.data.main);
    //console.log(response.data); */
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

    /* const response = await axios.get(reqUrl);

    for (var i = 0; i < days; i++) {
      console.log(response.data.list[i].main);
    }
    console.log(response.data); */
  }
}
