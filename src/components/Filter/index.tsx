import React, { useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import useStyles from './styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CheckIcon from '@mui/icons-material/Check';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Button } from '@mui/material';
const clsx = (classes: Array<any>) => {
  return classes.join(' ');
};
const Filter = () => {
  console.log('asf');
  const btnActive = true;
  const {
    filterBtn,
    activeDot,
    dropDown,
    header,
    list,
    textHolder,
    appliedFilters,
    btnTextField,
    btnHolder,
    filterItem,
    submenu,
    itemHolder,
    opacity0,
  } = useStyles({
    btnActive,
  })();
  type SelectedItem = {
    parent: string;
    items: string[];
  };
  const [showSubMenu, setShowSubMenu] = useState<Boolean[]>([]);
  const [selectedSubItems, setSelectedSubItems] = useState<SelectedItem[]>([]);
  const items = [
    {
      id: 1,
      label: 'data source',
      value: 'data source',
      subItems: [
        { label: 'filter1', value: 'filter1' },
        { label: 'filter2', value: 'filter2' },
        { label: 'filter3', value: 'filter3' },
      ],
    },
    {
      id: 2,
      label: 'connections',
      value: 'connections',
      subItems: [
        { label: 'filter1', value: 'filter1' },
        { label: 'filter2', value: 'filter2' },
        { label: 'filter3', value: 'filter3' },
      ],
    },
    {
      id: 3,
      label: 'tempratures',
      value: 'tempratures',
      subItems: [
        { label: 'filter1', value: 'filter1' },
        { label: 'filter2', value: 'filter2' },
        { label: 'filter3', value: 'filter3' },
      ],
    },
  ];
  const handleSubMenu = (item: any, index: any) => {
    // console.log({ item });
    const arr: any = [];
    arr[index] = !showSubMenu[index];
    // console.log({ arr });
    setShowSubMenu(arr);
  };
  const handleSelectedSubItems = (item: any, subItem: any, index: any) => {
    console.log({ item, subItem, index });
  };
  return (
    <div>
      <button className={filterBtn} disabled={false}>
        <FilterListIcon />
        <span>Filter</span>
        {btnActive && <span className={activeDot}></span>}
      </button>
      <div className={dropDown}>
        <div className={header}>
          <span className={opacity0}>
            <ChevronLeftIcon fontSize='small' />
          </span>
          filter
          <button className={btnTextField}>clear</button>
        </div>
        <ul className={list}>
          {items.map((item, index) => (
            <div className={itemHolder}>
              <li onClick={() => handleSubMenu(item, index)}>
                <div className={filterItem}>
                  <span className={textHolder}>
                    <CheckIcon fontSize='small' />
                    <span>{item.label}</span>
                  </span>
                  <ChevronRightIcon fontSize='small' />
                </div>
                <div className={appliedFilters}>
                  <span>
                    (filter1,filter2,filter3,filter2,filter3,filter2,filter3)
                  </span>
                </div>
              </li>
              {showSubMenu[index] && (
                <div className={clsx([dropDown, submenu])}>
                  <div className={header}>
                    <span onClick={() => setShowSubMenu([])}>
                      <ChevronLeftIcon fontSize='small' />
                    </span>
                    {item.label}
                    <button className={btnTextField}>All</button>
                  </div>
                  <ul className={list}>
                    {item.subItems.map((subItem, key) => (
                      <li
                        onClick={() =>
                          handleSelectedSubItems(item, subItem, key)
                        }
                        key={key}
                      >
                        <div className={filterItem}>
                          <span className={textHolder}>
                            <CheckIcon fontSize='small' />
                            <span> {subItem.label}</span>
                          </span>
                          <ChevronRightIcon fontSize='small' />
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className={btnHolder}>
                    <Button variant='contained' fullWidth>
                      Update View
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </ul>
        <div className={btnHolder}>
          <Button variant='contained' fullWidth>
            Update View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
