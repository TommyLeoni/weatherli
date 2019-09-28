import arg from "arg";

function parseArgsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--auto": Boolean,
      "--city": String,
      "--fahrenheit": Boolean,
      "--days": Number,
      "-a": "--auto",
      "-c": "--city",
      "-f": "--fahrenheit",
      "-d": "--days"
    },
    {
      argv: rawArgs.slice(2)
    }
  );
  return {
    getLocation: args['--auto'] || false,
    city: args['--city'] || null,
    fahrenheit: args['--fahrenheit'] || false,
    forecast: args['--days'] || 1
  };
}

export function cli(args) {
  let options = parseArgsIntoOptions(args);
  console.log(options);
}
