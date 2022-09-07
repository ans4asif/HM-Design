import React, {useEffect, useRef, useState} from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import useStyles from './styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CheckIcon from '@mui/icons-material/Check';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
import Popper, {PopperPlacementType} from '@mui/material/Popper';
import {Button, Fade} from '@mui/material';
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
        value: string;
        label: string;
        active?: boolean;
    };
    const listRef = useRef(null);
    const checkIconRef = useRef(null);
    const [showSubMenu, setShowSubMenu] = useState<boolean[]>([]);
    const [selectedSubItems, setSelectedSubItems] = useState<SelectedItem[]>([]);
    const [activeSubItems, setActiveSubItems] = useState<SelectedItem[]>([]);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [anchorElBtn, setAnchorElBtn] = useState<null | HTMLElement>(null);
    const [placement, setPlacement] = useState<PopperPlacementType>();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = (event: any) => {
        console.log('handleclick', {event: event.target});
        setAnchorEl(event.target);
        // setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement('right-start');
    };
    console.log({anchorEl, placement});

    const items = [
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
        console.log({checkIconRef: checkIconRef, nim: e});
        const arr: any = [];
        arr[index] = !showSubMenu[index];
        handleClick(e);
        setShowSubMenu(arr);
    };
    const handleSelectedSubItems = (item: any, subItem: any, index: any) => {
        console.log({item, subItem, index, selectedSubItems});
        const exists = selectedSubItems.filter(val => item.categoryId === val.parent && subItem.value === val.value)[0];
        if (!exists) {
            setSelectedSubItems(prev => [
                ...prev,
                {parent: item.categoryId, label: subItem.label, value: subItem.value},
            ]);
        } else {
            const filtered = selectedSubItems.filter(({value}) => value !== subItem.value);
            console.log('in else', {filtered});
            if (!filtered.length) {
                setSelectedSubItems([]);
            } else {
                setSelectedSubItems(filtered);
            }
        }
    };

    const isSelected = (subItem: any) => {
        const exists = selectedSubItems.filter(({value}) => value === subItem.value)[0];
        if (exists) {
            return true;
        }
        return false;
    };
    const handleUpdateMenu = () => {};
    const handleUpdateSubMenu = (item: any) => {
        const subItems = selectedSubItems.filter(({parent}) => item.categoryId === parent);
        const existingActiveSubItems = activeSubItems.filter(({parent}) =>
            subItems.map(({parent}) => parent).includes(parent)
        );
        if (subItems.length) {
            console.log('if subItemz');
            const active_arr = subItems.map(item => ({...item, active: true}));
            setActiveSubItems(prev => [...prev, ...active_arr]);
        } else {
            console.log('else subItemz');

            const existing = activeSubItems.filter(val => item.categoryId === val.parent)?.map(({value}) => value);
            if (existing.length) {
                const newItems = activeSubItems.filter(({value}) => !existing.includes(value));
                if (newItems.length) {
                    setActiveSubItems(newItems);
                }
            }
        }
    };
    console.log({activeSubItems});
    const handleBtnClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElBtn(anchorElBtn ? null : event.currentTarget);
        setShowDropdown(prev => !prev);
    };
    return (
        <div>
            <button className={filterBtn} disabled={false} onClick={handleBtnClick}>
                <FilterListIcon />
                <span>Filter</span>
                {btnActive && <span className={activeDot}></span>}
            </button>
            <Popper
                open={showDropdown ?? false}
                anchorEl={anchorElBtn}
                placement={'bottom'}
                modifiers={[
                    {
                        name: 'offset',
                        options: {
                            offset: [10, 30],
                        },
                    },
                ]}>
                <div className={dropDown}>
                    <div className={header}>
                        <span className={opacity0}>
                            <ChevronLeftIcon fontSize="small" />
                        </span>
                        filter
                        <button className={btnTextField}>clear</button>
                    </div>
                    <div>
                        <ul className={list} ref={listRef}>
                            {items.map((item, index) => (
                                <div className={itemHolder}>
                                    <li onClick={e => handleSubMenu(e, item, index)}>
                                        <div className={filterItem}>
                                            <span className={textHolder}>
                                                <CheckIcon fontSize="small" />
                                                <span>{item.name}</span>
                                            </span>
                                            <span>
                                                <ChevronRightIcon fontSize="small" />
                                            </span>
                                        </div>
                                        <div className={appliedFilters}>
                                            <span>(filter1,filter2,filter3,filter2,filter3,filter2,filter3)</span>
                                        </div>
                                    </li>
                                </div>
                            ))}
                        </ul>

                        {items.map((item, index) => (
                            <Popper
                                open={showSubMenu[index] ?? false}
                                anchorEl={anchorEl}
                                placement={placement}
                                modifiers={[
                                    {
                                        name: 'offset',
                                        options: {
                                            offset: [0, 30],
                                        },
                                    },
                                ]}>
                                <div className={clsx([dropDown, submenu])} id="item">
                                    <div className={header}>
                                        <span onClick={() => setShowSubMenu([])}>
                                            <ChevronLeftIcon fontSize="small" />
                                        </span>
                                        {item.name}
                                        <button className={btnTextField}>All</button>
                                    </div>
                                    <ul className={list}>
                                        {item.filters.map((subItem, key) => (
                                            <li onClick={() => handleSelectedSubItems(item, subItem, key)} key={key}>
                                                <div className={filterItem}>
                                                    <span
                                                        className={clsx([
                                                            textHolder,
                                                            isSelected(subItem) ? 'activeLi' : '',
                                                        ])}>
                                                        <CheckIcon fontSize="small" />
                                                        <span> {subItem.label}</span>
                                                    </span>
                                                    {/* <ChevronRightIcon fontSize="small" /> */}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className={btnHolder}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            onClick={() => {
                                                handleUpdateSubMenu(item);
                                            }}>
                                            Update View
                                        </Button>
                                    </div>
                                </div>
                            </Popper>
                        ))}
                    </div>
                    <div className={btnHolder}>
                        <Button variant="contained" fullWidth onClick={handleUpdateMenu}>
                            Update View
                        </Button>
                    </div>
                </div>
            </Popper>
        </div>
    );
};

export default Filter;
