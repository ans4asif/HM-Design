import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import useStyles from './styles';
import { KeyboardArrowDownOutlined } from '@mui/icons-material';

type Props = {
  placeholder?: string;
  options: Array<{ value: string; label: string }> | undefined;
  isMulti?: boolean;
  onAddUser?: ({ searchText, role }: { searchText: string; role: string }) => {
    searchText: string;
    role: string;
  };
};

const MultiSelect: React.FC<Props> = ({ options = [], isMulti, ...props }) => {
  console.log('first', { options });

  const classes = useStyles();
  const [value, setValue] = useState<string>(
    options.length > 0 ? `${options[0]?.value}` : ''
  );
  const [personName, setPersonName] = React.useState<string[]>([]);

  //   const [searchText, setSearchText] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    console.log('handleChange', { value });
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  console.log({ props });
  return (
    <div>
      <Select
        labelId='demo-multiple-name-label'
        id='demo-multiple-name'
        multiple
        value={personName}
        onChange={handleChange}
        MenuProps={{ classes: { paper: classes.selectMenu } }}
      >
        {options.map((option) => (
          <MenuItem key={option.label} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default MultiSelect;
