import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import { observer } from "mobx-react";
import { FC } from "react";
import { Currencies } from "../../constants";
import { AddExpense, Expenses } from "../../stores";
import TextField from "./TextField";

type Props = {
  addExpenseStore: AddExpense;
  addExpenseToList: Expenses["addExpenseToList"];
};

const AddForm = observer<FC<Props>>(({ addExpenseStore, addExpenseToList }) => (
  <FormControl>
    <Stack spacing={1}>
      <TextField
        label="Title of transaction"
        onChange={(value) => addExpenseStore.updateTitle(value)}
        value={addExpenseStore.title}
      />

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <TextField
          type="number"
          label={`Amount (in ${Currencies.PLN})`}
          onChange={(value) => {
            let parsedValue = 0;
            if (value) {
              const [decimals, fraction] = value.split(DOT_CHAR);
              const valueWithSlicedFraction =
                decimals + (fraction ? DOT_CHAR + fraction.slice(0, 2) : "");

              parsedValue = parseFloat(valueWithSlicedFraction);
            }

            addExpenseStore.updateAmountPLN(parsedValue);
          }}
          value={addExpenseStore.amountPLN.toString()}
        />

        <Button
          disabled={
            addExpenseStore.title.length < TITLE_MIN_CHAR ||
            !addExpenseStore.amountPLN
          }
          onClick={() => {
            addExpenseToList(addExpenseStore.title, addExpenseStore.amountPLN);
            addExpenseStore.resetForm();
          }}
          variant="contained"
        >
          Add
        </Button>
      </Stack>
    </Stack>
  </FormControl>
));

const TITLE_MIN_CHAR = 5;
const DOT_CHAR = ".";

export default AddForm;
