import React, {useEffect, useRef, useState} from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import useStyles from './styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CheckIcon from '@mui/icons-material/Check';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
import Popper, {PopperPlacementType} from '@mui/material/Popper';
import {Button} from '@mui/material';
import {ActiveSubItems, Props, SelectedItem} from './types';

const clsx = (classes: Array<any>) => {
    return classes.join(' ');
};

const Filter: React.FC<Props> = ({onChange, options, ...props}) => {
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

    const dropDownRef = useRef(null);
    const subMenuRef = useRef(null);
    const [showSubMenu, setShowSubMenu] = useState<boolean[]>([]);
    const [selectedSubItems, setSelectedSubItems] = useState<SelectedItem[]>([]);
    const [activeSubItems, setActiveSubItems] = useState<ActiveSubItems[]>([]);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [anchorElBtn, setAnchorElBtn] = useState<null | HTMLElement>(null);
    const [placement, setPlacement] = useState<PopperPlacementType>();
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = (event: any) => {
        // console.log('handleclick', {event: event.target});
        setAnchorEl(event.target);
        setPlacement('right-start');
    };
    // console.log({anchorEl, placement});

    useEffect(() => {}, []);
    const handleSubMenu = (e: any, item: any, index: any) => {
        // console.log({checkIconRef: dropDownRef, nim: e});
        const arr: any = [];
        // arr[index] = !showSubMenu[index];
        arr[index] = true;
        handleClick(e);
        setShowSubMenu(arr);
    };
    const handleSelectedSubItems = (item: any, subItem: any, index: any) => {
        const exists = selectedSubItems.filter(val => item.categoryId === val.parent && subItem.value === val.value)[0];
        if (!exists) {
            setSelectedSubItems(prev => [
                ...prev,
                {parent: item.categoryId, label: subItem.label, value: subItem.value},
            ]);
        } else {
            const filtered = selectedSubItems.filter(({value}) => value !== subItem.value);
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
    const handleUpdateMenu = () => {
        setShowDropdown(false);
        onChange(activeSubItems);
    };
    const handleUpdateSubMenu = (item: any) => {
        const subItems = selectedSubItems.filter(({parent}) => item.categoryId === parent)?.map(({value}) => value);
        const existingActiveSubItems = activeSubItems.filter(({name}) => name === item.categoryId)[0];

        if (!existingActiveSubItems?.selectedFilters?.length) {
            //check in subItems
            if (!subItems.length) {
                //means set activesubitems that parent childs:[]
                const new_active_sub_items = activeSubItems.filter(elem => elem.name !== item.categoryId);
                setActiveSubItems(new_active_sub_items);
            } else {
                //set activesubitems childs that are in subItems
                const new_active_sub_item = {name: item.categoryId, selectedFilters: subItems};
                const new_active_sub_items = activeSubItems.filter(elem => elem.name !== item.categoryId);
                setActiveSubItems([...new_active_sub_items, new_active_sub_item]);
            }
        } else {
            //setActive sub items childs subItems[]
            const active_childs = existingActiveSubItems.selectedFilters.filter(val => subItems.includes(val));
            // const new_active_childs=
            const new_active_sub_items = activeSubItems.filter(elem => elem.name !== item.categoryId);
            if (active_childs?.length) {
                // const new_active_sub_item = {name: item.categoryId, selectedFilters: active_childs};
                const new_active_sub_item = {name: item.categoryId, selectedFilters: subItems};
                setActiveSubItems([...new_active_sub_items, new_active_sub_item]);
                setActiveSubItems([...new_active_sub_items, new_active_sub_item]);
            } else {
                setActiveSubItems(new_active_sub_items);
            }
        }
        setShowSubMenu([]);
    };
    const handleBtnClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElBtn(anchorElBtn ? null : event.currentTarget);
        setShowDropdown(prev => !prev);
    };

    const getActiveSubItems = (categoryId: string) => {
        const subItems = activeSubItems.filter(({name}) => name === categoryId)[0]?.selectedFilters;
        if (subItems?.length) {
            const childs = options.filter(item => item.categoryId === categoryId)[0]?.filters;
            return childs
                .filter(child => subItems.includes(child.value))
                .map(({label}) => label)
                .join(', ');
        }
        return null;
    };
    const handleClear = () => {
        setSelectedSubItems([]);
        setActiveSubItems([]);
        setShowSubMenu([]);
    };
    const handleAll = (item: any) => {
        const subItems = options.filter(elem => item.categoryId === elem.categoryId)[0]?.filters;
        const curr_subItems = selectedSubItems.filter(val => !subItems.map(({value}) => value).includes(val.value));
        const newSubItem = subItems.map(elem => ({...elem, parent: item.categoryId}));
        setSelectedSubItems([...curr_subItems, ...newSubItem]);
        return;
    };
    const handleShowSubMenuHover = (e: any, item: any, index: any) => {
        console.log({item});
        const exists = selectedSubItems.filter(itm => itm?.value === item)[0];
        console.log({exists});
        if (!showSubMenu[index]) {
            console.log('in if subhover');
            const arr: any = [];
            arr[index] = true;
            setShowSubMenu(arr);
        }
    };
    const onLeaveOptions = (e: any) => {
        console.log({e});
    };
    // console.log({dropDownRef: dropDownRef.current, subMenuRef: subMenuRef.current});
    return (
        <div>
            <button className={filterBtn} disabled={false} onClick={handleBtnClick}>
                <FilterListIcon />
                <span>Filter</span>
                {!!activeSubItems?.length && <span className={activeDot}></span>}
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
                        <button className={btnTextField} onClick={handleClear}>
                            clear
                        </button>
                    </div>
                    <div>
                        <ul className={list} ref={dropDownRef}>
                            {options.map((item, index) => (
                                <div className={itemHolder}>
                                    <li
                                        // onClick={e => handleSubMenu(e, item, index)}
                                        onMouseEnter={e => {
                                            console.log('onMouseenter');
                                            handleSubMenu(e, item, index);
                                        }}>
                                        <div className={filterItem}>
                                            <span
                                                className={clsx([
                                                    textHolder,
                                                    getActiveSubItems(item.categoryId)?.length ? 'activeLi' : '',
                                                ])}>
                                                <CheckIcon fontSize="small" />
                                                <span>{item.name}</span>
                                            </span>
                                            <span>
                                                <ChevronRightIcon fontSize="small" />
                                            </span>
                                        </div>
                                        <div className={appliedFilters}>
                                            <span>{getActiveSubItems(item.categoryId)}</span>
                                        </div>
                                    </li>
                                </div>
                            ))}
                        </ul>

                        {options.map((item, index) => (
                            <Popper
                                open={showSubMenu[index] ?? false}
                                anchorEl={anchorEl}
                                placement={placement}
                                modifiers={[
                                    {
                                        name: 'offset',
                                        options: {
                                            offset: [0, 10],
                                        },
                                    },
                                ]}>
                                <div
                                    ref={subMenuRef}
                                    className={clsx([dropDown, submenu])}
                                    id="item"
                                    // onMouseEnter={e => {
                                    //     console.log('on mouse enter');
                                    //     handleShowSubMenuHover(e, item, index);
                                    // }}
                                    // onMouseLeave={e => {
                                    //     console.log('on mouse leave submenu', {target: e.currentTarget});
                                    //     setShowSubMenu([]);
                                    // }}
                                >
                                    <div className={header}>
                                        <span>
                                            <ChevronLeftIcon fontSize="small" />
                                        </span>
                                        {item.name}
                                        <button
                                            className={btnTextField}
                                            onClick={() => {
                                                handleAll(item);
                                            }}>
                                            All
                                        </button>
                                    </div>
                                    <ul className={list}>
                                        {item.filters.map((subItem, key) => (
                                            <li
                                                onClick={() => {
                                                    console.log('onclick');
                                                    window.removeEventListener('mouseleave', () => {});
                                                    handleSelectedSubItems(item, subItem, key);
                                                }}
                                                // onMouseEnter={e => {
                                                //     handleSubMenu(e, item, index);
                                                // }}
                                                // onMouseLeave={e => {
                                                //     handleSubMenu(e, item, index);
                                                // }}
                                                key={key}>
                                                <div className={filterItem}>
                                                    <span
                                                        className={clsx([
                                                            textHolder,
                                                            isSelected(subItem) ? 'activeLi' : '',
                                                        ])}>
                                                        <CheckIcon fontSize="small" />
                                                        <span> {subItem.label}</span>
                                                    </span>
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
