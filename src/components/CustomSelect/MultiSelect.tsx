import {
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { useState } from 'react';
import useStyles from './styles';
import { KeyboardArrowDownOutlined } from '@mui/icons-material';

type Props = {
  placeholder?: string;
  options: Array<{ value: string; label: string }> | undefined;
  isMulti?: boolean;
  label?: string | { inputProps: { 'aria-label': string } };
  showBorder?: boolean;
  error?: boolean;
  errMsg?: string;
  name: string | undefined;
  value: string[];

  onAddUser?: ({ searchText, role }: { searchText: string; role: string }) => {
    searchText: string;
    role: string;
    showBorder?: boolean;
  };
  onChange: (event: SelectChangeEvent<string | string[]>) => void;
};

const MultiSelect: React.FC<Props> = ({
  options = [],
  isMulti,
  label,
  name,
  errMsg,
  showBorder,
  placeholder,
  onChange = () => {},
  error,
  value,
  ...props
}) => {
  const { selectMenu, multiSelect, placeHolder, errorMsg } = useStyles({
    showBorder,
    ...props,
  })();

  //   const [searchText, setSearchText] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    onChange(event);
  };

  return (
    <div>
      <Select
        labelId='demo-multiple-name-label'
        id='demo-multiple-name'
        multiple
        name={name}
        value={value}
        displayEmpty
        onChange={handleChange}
        className={multiSelect}
        error={error}
        size='small'
        MenuProps={{ classes: { paper: selectMenu } }}
        renderValue={(selected) => {
          if (!selected || selected.length < 1) {
            return (
              <p className={placeHolder}>
                {placeholder ?? 'select options...'}
              </p>
            );
          }
          return selected.join(', ');
        }}
        IconComponent={KeyboardArrowDownOutlined}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.label} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText error>{errMsg}</FormHelperText>}
    </div>
  );
};

export default MultiSelect;
