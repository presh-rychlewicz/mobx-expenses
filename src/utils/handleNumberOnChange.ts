const handleNumberOnChange = (
  value: string,
  allowedDecimals: number,
  updater: (value: number) => void
) => {
  let parsedValue = 0;
  if (value) {
    const [decimals, fraction] = value.split(DECIMAL_DELIMITER);
    const valueWithSlicedFraction =
      decimals +
      (fraction ? DECIMAL_DELIMITER + fraction.slice(0, allowedDecimals) : "");

    parsedValue = parseFloat(valueWithSlicedFraction);
  }

  updater(parsedValue);
};

const DECIMAL_DELIMITER = ".";

export default handleNumberOnChange;
