export function TemperatureBlock(temp, units, humidity) {
  return (
    "Average temperature of " +
    temp +
    (units == "Celsius"
      ? " Celsius"
      : units == "Imperial"
      ? " Fahrenheit"
      : " Kelvin") +
    " with a humidity of " +
    humidity +
    " percent"
  );
}
