import { Stack } from "@mui/material";
import { observer } from "mobx-react";
import { FC } from "react";
import { Expenses, addExpenseStore } from "../stores";
import AddForm from "./AddForm";
import ExpensesTable from "./ExpensesTable";
import Header from "./Header";
import Summary from "./Summary";

type Props = {
  expensesStore: Expenses;
};

const App = observer<FC<Props>>(({ expensesStore }) => (
  <Stack spacing={2}>
    <Header />

    <AddForm
      addExpenseStore={addExpenseStore}
      addExpenseToList={expensesStore.addExpenseToList}
    />

    <ExpensesTable
      deleteExpense={expensesStore.deleteExpense}
      expenses={expensesStore.expenses}
    />

    <Summary sum={expensesStore.sum} />
  </Stack>
));

export default App;
