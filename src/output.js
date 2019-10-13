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
      tempToColour(response.data.main.temp) +
      (units == "Celsius"
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

function tempToColour(temp) {
  if (temp < -25) {
    return chalk.hex("#FF01FF")(temp);
  } else if (temp < -20) {
    return chalk.hex("#A000FF")(temp);
  } else if (temp < -15) {
    return chalk.hex("#0200FC")(temp);
  } else if (temp < -10) {
    return chalk.hex("#027AFD")(temp);
  } else if (temp < -5) {
    return chalk.hex("#00CDFD")(temp);
  } else if (temp < 0) {
    return chalk.hex("#03F8FA")(temp);
  } else if (temp < 5) {
    return chalk.hex("#7FFF00")(temp);
  } else if (temp < 10) {
    return chalk.hex("#F8F705")(temp);
  } else if (temp < 15) {
    return chalk.hex("#FDCE00")(temp);
  } else if (temp < 20) {
    return chalk.hex("#FE9B00")(temp);
  } else if (temp < 25) {
    return chalk.hex("#FC5102")(temp);
  } else if (temp < 30) {
    return chalk.hex("#CB0003")(temp);
  } else if (temp < 35) {
    return chalk.hex("#AC0104")(temp);
  } else if (temp < 40) {
    return chalk.hex("#BC3233")(temp);
  } else if (temp < 45) {
    return chalk.hex("#BC5555")(temp);
  } else if (temp < 50) {
    return chalk.hex("#BC7777")(temp);
  }
}
