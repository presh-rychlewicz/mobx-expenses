import { TextField as MuiTextField, Stack } from "@mui/material";
import { FC, HTMLInputTypeAttribute } from "react";

type Props = {
  label: string;
  value: string;
  onChange: (value: Props["value"]) => void;
  type?: HTMLInputTypeAttribute;
};

const TextField: FC<Props> = ({ label, onChange, value, type = "text" }) => (
  <Stack direction="row" alignItems="center" gap="20px">
    <label>{label}</label>

    <MuiTextField
      id="my-input"
      onChange={(event) => onChange(event.target.value)}
      size="small"
      type={"number"}
      {...(type === "number" && {
        inputProps: {
          step: "0.01",
        },
      })}
      value={value}
      variant="outlined"
    />
  </Stack>
);

export default TextField;
