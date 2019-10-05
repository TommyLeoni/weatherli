import axios from "axios";
import stringInject from "stringinject";
import key from "./key";

export class API {
  constructor() {
    this.apiKey = key();
  }
  returnKey = () => {
    return this.apiKey;
  };

  async currConditions(city, temp) {
    const reqUrl = stringInject(
      "https://api.openweathermap.org/data/2.5/weather?q={cityName}&APPID={apiKey}&units={units}",
      {
        cityName: city,
        apiKey: this.apiKey,
        units: temp == "Celsius" ? "metric" : "imperial"
      }
    );

    const response = await axios.get(reqUrl);
    console.log(response.data.main);
  }

  async forecast(city, temp, days) {
    const reqUrl = stringInject(
      "https://api.openweathermap.org/data/2.5/forecast?q={cityName}&APPID={apiKey}&cnt={cnt}&units={units}",
      {
        cityName: city,
        cnt: days,
        units: temp == "Celsius" ? "metric" : "imperial",
        apiKey: this.apiKey
      }
    );

    const response = await axios.get(reqUrl);

    for (var i = 0; i < days; i++) {
      console.log(response.data.list[i].main);
    }
  }
}
