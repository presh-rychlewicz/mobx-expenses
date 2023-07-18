import { Stack } from "@mui/material";
import { observer } from "mobx-react";

import { FC, useState } from "react";
import { Expense, Expenses } from "../stores";
import AddExpenseForm from "./AddExpenseForm";
import ExpensesTable from "./ExpensesTable";
import Header from "./Header";
import Summary from "./Summary";
import UpdateCurrencyExchangeRateForm from "./UpdateExchangeRateForm";

const App = observer<FC>(() => {
  const [expensesStore] = useState(
    () =>
      new Expenses([
        new Expense("New book about Rust", 100),
        new Expense("Snacks for a football match", 20),
        new Expense("Bus ticket", 2.55),
      ])
  );

  return (
    <Stack spacing={2}>
      <Header exchangeRate={expensesStore.exchangeRate} />

      <AddExpenseForm onSubmit={expensesStore.addExpenseToList} />

      <ExpensesTable
        deleteExpense={expensesStore.deleteExpense}
        expenses={expensesStore.expenses}
      />

      <Summary sum={expensesStore.sum} />

      <UpdateCurrencyExchangeRateForm
        onSubmit={expensesStore.updateExchangeRate}
      />
    </Stack>
  );
});

export default App;
