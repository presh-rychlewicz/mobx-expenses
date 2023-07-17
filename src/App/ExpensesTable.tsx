import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FC } from "react";
import { Currencies } from "../constants";
import { Button } from "@mui/material";
import { Expenses } from "../stores";

type Props = {
  expenses: Expenses["expenses"];
  deleteExpense: Expenses["deleteExpense"];
};

const ExpensesTable: FC<Props> = ({ deleteExpense, expenses }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Title</TableCell>
        <TableCell>Amount({Currencies.PLN})</TableCell>
        <TableCell>Amount({Currencies.EUR})</TableCell>
        <TableCell>Options</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {expenses.map(({ amountEUR, amountPLN, id, title }) => (
        <TableRow key={id}>
          <TableCell component="th" scope="row">
            {title}
          </TableCell>

          <TableCell>{amountPLN}</TableCell>

          <TableCell>{amountEUR}</TableCell>

          <TableCell>
            <Button onClick={() => deleteExpense(id)} variant="text">
              Delete
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default ExpensesTable;
