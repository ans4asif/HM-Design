import { MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./styles";
import { SelectChangeEvent } from "@mui/material";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import IconAdd from "../IconAdd";

type Props = {
  placeholder?: string;
  options: Array<{ value: string; label: string }>;
  onAddUser: ({ searchText, role }: { searchText: string; role: string }) => {
    searchText: string;
    role: string;
  };
};
const InputDropdown: React.FC<Props> = ({
  placeholder,
  options,
  onAddUser,
  ...props
}) => {
  const classes = useStyles();
  const [value, setValue] = useState<string>(`${options[0].value}`);
  const [searchText, setSearchText] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.dropdownInput}>
      <TextField
        variant="standard"
        className={classes.textField}
        placeholder={placeholder ?? "Search"}
        onChange={({ target: { value } }) => setSearchText(value)}
        {...props}
      />
      <div className={classes.selectHolder}>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          className={classes.select}
          MenuProps={{ classes: { paper: classes.selectMenu } }}
          IconComponent={KeyboardArrowDownOutlined}
          {...props}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <IconAdd
          onClick={() => {
            onAddUser({ searchText, role: value });
          }}
          {...props}
        />
      </div>
    </div>
  );
};

export default InputDropdown;
