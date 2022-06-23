import { MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./styles";
import { SelectChangeEvent } from "@mui/material";

type Props = {
  placeholder: string;
};
const InputDropdown: React.FC<Props> = ({ placeholder }) => {
  const classes = useStyles();
  const [value, setValue] = useState<any>("member");
  const options = [
    { value: "member", label: "member" },
    { value: "admin", label: "admin" },
  ];

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  return (
    <div className={classes.dropdownInput}>
      <TextField
        variant="standard"
        className={classes.textField}
        placeholder={placeholder}
      />
      <div className={classes.selectHolder}>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          className={classes.select}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {/* <div className="icon">+</div> */}
      </div>
    </div>
  );
};

export default InputDropdown;
