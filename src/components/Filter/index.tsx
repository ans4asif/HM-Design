import React, { useEffect, useRef, useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import useStyles from './styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CheckIcon from '@mui/icons-material/Check';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import { Button, Fade } from '@mui/material';
import Box from '@mui/material/Box';
const clsx = (classes: Array<any>) => {
  return classes.join(' ');
};
const Filter = () => {
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
  const listRef = useRef(null);
  const [showSubMenu, setShowSubMenu] = useState<boolean[]>([]);
  const [selectedSubItems, setSelectedSubItems] = useState<SelectedItem[]>([]);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<PopperPlacementType>();

  const handleClick = (event: any) => {
    console.log('handleclick', { event: event });
    setAnchorEl(event.target);
    // setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement('right-start');
  };
  console.log({ anchorEl, placement });
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
    {
      id: 4,
      label: 'tempratures',
      value: 'tempratures',
      subItems: [
        { label: 'filter1', value: 'filter1' },
        { label: 'filter2', value: 'filter2' },
        { label: 'filter3', value: 'filter3' },
      ],
    },
    {
      id: 5,
      label: 'tempratures',
      value: 'tempratures',
      subItems: [
        { label: 'filter1', value: 'filter1' },
        { label: 'filter2', value: 'filter2' },
        { label: 'filter3', value: 'filter3' },
      ],
    },
  ];
  const items2 = [
    {
      categoryId: 'data-source',
      name: 'data source',
      filters: [
        {
          label: 'crowdstrike fdr',
          value: '996599d1-2f4c-4bf9-a3c0-f8f4fc0e0d92',
        },
        {
          label: 'crowdstrike hosts',
          value: '30ba3d2c-ce43-400f-8c5a-c22bf96c59f9',
        },
      ],
    },
    {
      categoryId: 'connections',
      name: 'connections',
      filters: [
        {
          label: '(crowdstrike hosts)',
          value: '621050ba-7818-4d0c-a46f-7edf1c9bf3a0',
        },
        {
          label: 'crowdstrike-on-prem',
          value: '4f081a51-03f1-491b-971d-3874b0e28e09',
        },
      ],
    },
  ];
  // const popover = document.getElementById('item');

  useEffect(() => {}, []);
  const handleSubMenu = (e: any, item: any, index: any) => {
    const arr: any = [];
    arr[index] = !showSubMenu[index];
    // console.log({ arr });
    handleClick(e);
    setShowSubMenu(arr);

    // const target = document.getElementById('target');
    // console.log({ popover, target });
    // if (target && popover) {
    //   const targetRect = target.getBoundingClientRect();
    //   const popoverRect = popover.getBoundingClientRect();
    //   console.log({ targetRect, popoverRect });
    //   const top = targetRect.top + targetRect.height;
    //   const left =
    //     targetRect.left + targetRect.width / 2 - popoverRect.width / 2;
    //   console.log({ left, top, popover });

    //   popover.style.top = `${top + 8 - 117}px`;
    //   popover.style.left = `${left + 100}px`;
    //   console.log({ popover });
    // }
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
      {/* <Box sx={{ width: 500 }}> */}
      <div className={dropDown}>
        <div className={header}>
          <span className={opacity0}>
            <ChevronLeftIcon fontSize='small' />
          </span>
          filter
          <button className={btnTextField}>clear</button>
        </div>
        <div>
          <ul className={list} ref={listRef}>
            {items.map((item, index) => (
              <div className={itemHolder}>
                <li>
                  <div className={filterItem}>
                    <span className={textHolder}>
                      <CheckIcon fontSize='small' />
                      <span>{item.label}</span>
                    </span>
                    <ChevronRightIcon
                      fontSize='small'
                      onClick={(e) => handleSubMenu(e, item, index)}
                    />
                  </div>
                  <div className={appliedFilters}>
                    <span>
                      (filter1,filter2,filter3,filter2,filter3,filter2,filter3)
                    </span>
                  </div>
                </li>
              </div>
            ))}
          </ul>

          {items.map(
            (item, index) => (
              // showSubMenu[index] && (
              <Popper
                open={showSubMenu[index] ?? false}
                anchorEl={anchorEl}
                placement={placement}
                modifiers={[
                  {
                    name: "offset",
                    options: {
                      offset: [0, 30],
                    },
                  },
                ]}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <div className={clsx([dropDown, submenu])} id='item'>
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
                  </Fade>
                )}
              </Popper>
            )
            // )
          )}
        </div>
        <div className={btnHolder}>
          <Button variant='contained' fullWidth>
            Update View
          </Button>
        </div>
      </div>
      {/* </Box> */}
    </div>
  );
};

export default Filter;
