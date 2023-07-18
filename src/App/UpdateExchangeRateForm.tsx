import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import { observer } from "mobx-react";
import { FC, useState } from "react";
import { FormField } from "../components";
import { UpdateExchangeRate } from "../stores";
import { handleNumberOnChange } from "../utils";

type Props = {
  onSubmit: (value: UpdateExchangeRate["exchangeRate"]) => void;
};

const UpdateExchangeRateForm = observer<FC<Props>>(({ onSubmit }) => {
  const [updateExchangeRateStore] = useState(() => new UpdateExchangeRate());

  return (
    <FormControl>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <FormField
          type="number"
          label="New exchange rate"
          onChange={(value) =>
            handleNumberOnChange(value, 3, (newValue) =>
              updateExchangeRateStore.updateExchangeRate(newValue)
            )
          }
          value={updateExchangeRateStore.exchangeRate.toString()}
        />

        <Button
          disabled={!updateExchangeRateStore.exchangeRate}
          onClick={() => {
            onSubmit(updateExchangeRateStore.exchangeRate);
            updateExchangeRateStore.resetForm();
          }}
          type="submit"
          variant="contained"
        >
          Update
        </Button>
      </Stack>
    </FormControl>
  );
});

export default UpdateExchangeRateForm;
