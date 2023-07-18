import { FC } from "react";
import { Currencies } from "../constants";
import { Expenses } from "../stores";
import { observer } from "mobx-react";

type Props = {
  sum: Expenses["sum"];
};

const Summary = observer<FC<Props>>(({ sum }) => (
  <p>
    Sum: {sum.PLN} {Currencies.PLN} ({sum.EUR} {Currencies.EUR})
  </p>
));

export default Summary;
