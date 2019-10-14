import emoji from "node-emoji";
import chalk from "chalk";

export function currCoditionsOutput(response, units) {
  const output = [];
  output.push(
    chalk.bold(
      "Current coditions in " +
        response.data.name +
        ", " +
        response.data.sys.country +
        ":\n"
    )
  );
  output.push(
    "Average temperature of " +
      tempToColour(response.data.weather[0].icon, response.data.main.temp) +
      (units == "Metric"
        ? " Celsius"
        : units == "Imperial"
        ? " Fahrenheit"
        : " Kelvin") +
      " with a humidity of " +
      response.data.main.humidity +
      " percent"
  );

  output.forEach(line => {
    console.log(line);
  });
}

export function forecastOutput(response, units) {}

function tempToColour(icon, temp) {
  let hexDigits = icon.split("");
  return chalk.rgb(
    temp * 4 - 40 > 255 ? 255 : temp * 4 - 40 < 0 ? 0 : Math.round(temp * 4 - 40),
    22,
    22
  )(temp);
}
