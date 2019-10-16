import arg from "arg";
import inquirer from "inquirer";
import { getWeatherInfo } from "./main";

function parseArgsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--city": String,
      "--units": String,
      "--forecast": String,
      "-c": "--city",
      "-u": "--units",
      "-f": "--forecast"
    },
    {
      argv: rawArgs.slice(2)
    }
  );
  return {
    city: args["--city"] || false,
    units: args["--units"] || false,
    forecast: args["--forecast"] || false
  };
}

async function promptForMissingOptions(options) {
  const prompts = [];
  if (!options.city) {
    prompts.push({
      type: "input",
      name: "city",
      message: `What city's weather information would you like?`,
      when: options.city !== null,
      default: null
    });
  }

  if (!options.units) {
    prompts.push({
      type: "list",
      name: "units",
      message: `Do you prefer fahrenheit or celsius read outs?`,
      choices: [
        {name: "Metric", value: "metric"},
        {name: "Imperial", value: "imperial"},
        {name: "Kelvin", value: "kelvin"}
      ],
      default: "metric"
    });
  }

  if (!options.forecast) {
    prompts.push({
      type: "number",
      name: "forecast",
      message: `How many days would you like to have information on? \n (15 max, 0 for the current conditions)`,
      default: 0
    });
  }

  const answers = await inquirer.prompt(prompts);

  return {
    ...options,
    city: options.city || answers.city,
    units: options.units || answers.units,
    forecast: options.forecast || answers.forecast
  };
}

export async function cli(args) {
  let options = parseArgsIntoOptions(args);
  options = await promptForMissingOptions(options);
  getWeatherInfo(options);
}
