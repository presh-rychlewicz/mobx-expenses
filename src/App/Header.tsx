import { Stack } from "@mui/material";
import { Currencies, PLN_TO_EUR_RATE } from "../constants";

const Header = () => {
  const currencyRatio = `1 ${Currencies.EUR} = ${PLN_TO_EUR_RATE} ${Currencies.PLN}`;

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <h1>List of expenses</h1>

      <p>{currencyRatio}</p>
    </Stack>
  );
};

export default Header;
