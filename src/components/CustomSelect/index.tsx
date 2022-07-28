import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import useStyles from './styles';
import { KeyboardArrowDownOutlined } from '@mui/icons-material';

type Props = {
  placeholder?: string;
  options: Array<{ value: string; label: string }> | undefined;
  onAddUser?: ({ searchText, role }: { searchText: string; role: string }) => {
    searchText: string;
    role: string;
  };
};

const CustomSelect: React.FC<Props> = ({ options = [], ...props }) => {
  console.log('first', { options });

  const classes = useStyles();
  const [value, setValue] = useState<string>(
    options.length > 0 ? `${options[0]?.value}` : ''
  );
  //   const [searchText, setSearchText] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        className={classes.select}
        MenuProps={{ classes: { paper: classes.selectMenu } }}
        IconComponent={KeyboardArrowDownOutlined}
        {...props}
      >
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default CustomSelect;
