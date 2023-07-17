import { FC } from "react";
import { Currencies } from "../constants";
import { Expenses } from "../stores";

type Props = {
  sum: Expenses["sum"];
};

const Summary: FC<Props> = ({ sum }) => (
  <p>
    Sum: {sum.PLN} {Currencies.PLN} ({sum.EUR} {Currencies.EUR})
  </p>
);

export default Summary;
