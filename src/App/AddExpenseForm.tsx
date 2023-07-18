import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import { observer } from "mobx-react";
import { FC, useState } from "react";
import { FormField } from "../components";
import { Currencies } from "../constants";
import { AddExpense } from "../stores";
import { ExpenseItem } from "../stores/shared";
import { handleNumberOnChange } from "../utils";

type Props = {
  onSubmit: (
    title: ExpenseItem["title"],
    amountPLN: ExpenseItem["amountPLN"]
  ) => void;
};

const AddExpenseForm = observer<FC<Props>>(({ onSubmit }) => {
  const [addExpenseStore] = useState(() => new AddExpense());

  return (
    <FormControl>
      <Stack spacing={1}>
        <FormField
          label="Title of transaction"
          onChange={(value) => addExpenseStore.updateTitle(value)}
          value={addExpenseStore.title}
        />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <FormField
            type="number"
            label={`Amount (in ${Currencies.PLN})`}
            onChange={(value) => {
              handleNumberOnChange(value, 2, (newValue) =>
                addExpenseStore.updateAmountPLN(newValue)
              );
            }}
            value={addExpenseStore.amountPLN.toString()}
          />

          <Button
            disabled={
              addExpenseStore.title.length < TITLE_MIN_CHAR ||
              !addExpenseStore.amountPLN
            }
            onClick={() => {
              onSubmit(addExpenseStore.title, addExpenseStore.amountPLN);
              addExpenseStore.resetForm();
            }}
            type="submit"
            variant="contained"
          >
            Add
          </Button>
        </Stack>
      </Stack>
    </FormControl>
  );
});

const TITLE_MIN_CHAR = 5;

export default AddExpenseForm;
