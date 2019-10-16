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
    tempToColour(response.data.main.temp, units) +
    (units == "metric"
      ? " Celsius"
      : units == "imperial"
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

export function forecastOutput(response, units) { }

function tempToColour(temp, units) {
  if (units == "metric") {
    if (temp < 0) {
      return chalk.blue(temp);
    } else if (temp < 20) {
      return chalk.greenBright(temp);
    } else if (temp < 30) {
      return chalk.rgb(255, 165, 0)(temp);
    } else return chalk.red(temp);
  } else if (units == "imperial") {
    if (temp < 32) {
      return chalk.blue(temp);
    } else if (temp < 70) {
      return chalk.greenBright(temp);
    } else if (temp < 90) {
      return chalk.rgb(255, 165, 0)(temp);
    } else return chalk.red(temp);
  } else if (units == "kelvin") {
    if (temp < 273.15) {
      return chalk.blue(temp);
    } else if (temp < 293.15) {
      return chalk.greenBright(temp);
    } else if (temp < 303.15) {
      return chalk.rgb(255, 165, 0)(temp);
    } else return chalk.red(temp);
  } else {
    console.log("-- invalid units --")
  }
}
