import {
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import useStyles from './styles';
import { KeyboardArrowDownOutlined } from '@mui/icons-material';

type Props = {
  placeholder?: string;
  options: Array<{ value: string; label: string }> | undefined;
  showBorder?: boolean;
  error?: boolean;
  errMsg?: string;
  name: string | undefined;
  value: string;

  onAddUser?: ({ searchText, role }: { searchText: string; role: string }) => {
    searchText: string;
    role: string;
  };
  onChange: (event: SelectChangeEvent) => void;
};

const CustomSelect: React.FC<Props> = ({
  options = [],
  showBorder,
  placeholder,
  name,
  error,
  value,
  errMsg,
  onChange = () => {},
  ...props
}) => {
  const { selectMenu, select, placeHolder } = useStyles({
    showBorder,

    ...props,
  })();
  // const [value, setValue] = useState<string>('');
  //   const [searchText, setSearchText] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    // setValue(event.target.value);
    onChange(event);
  };
  return (
    <div>
      <Select
        value={value}
        onChange={handleChange}
        name={name}
        displayEmpty
        error={error}
        // inputProps={{ 'aria-label': 'Without label' }}
        className={select}
        MenuProps={{ classes: { paper: selectMenu } }}
        IconComponent={KeyboardArrowDownOutlined}
        size='small'
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <p className={placeHolder}>{placeholder ?? 'select an option'}</p>
            );
          }
          return selected;
        }}
        {...props}
      >
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText error>{errMsg}</FormHelperText>}
    </div>
  );
};

export default CustomSelect;
