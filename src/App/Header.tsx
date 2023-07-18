import { Stack } from "@mui/material";
import { observer } from "mobx-react";
import { FC } from "react";
import { Currencies } from "../constants";
import { Expenses } from "../stores";

type Props = {
  exchangeRate: Expenses["exchangeRate"];
};

const Header = observer<FC<Props>>(({ exchangeRate }) => {
  const currencyRatio = `1 ${Currencies.EUR} = ${exchangeRate} ${Currencies.PLN}`;

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <h1>List of expenses</h1>

      <p>{currencyRatio}</p>
    </Stack>
  );
});

export default Header;
