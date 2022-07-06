import React, { useEffect, useState, useRef } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import useStyles from "./styles";
import Button from "@mui/material/Button";
import { ArrowDropDown } from "@mui/icons-material";

type Props = {
  startIcon?: React.ReactElement;
  showEndIcon?: boolean;
  width?: number;
  placement?: "bottom" | "left";
  options: string[];
  dropDownWidth?: number;
  disabled?: boolean;
  onClick: (option: string | undefined) => void;
  variant: "light" | "dark";
};
const Menu: React.FC<Props> = ({
  startIcon,
  showEndIcon,
  placement,
  options,
  dropDownWidth,
  onClick,
  disabled,
  variant,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  console.log({ variant });
  const { menuBtn, paper } = useStyles({
    placement,
    variant,
    disabled,
    dropDownWidth,
    ...props,
  })();
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent, value?: string) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
    onClick(value);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    // prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Button
        ref={anchorRef}
        style={{ textTransform: "none" }}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        disabled={disabled}
        className={menuBtn}
        startIcon={startIcon}
        endIcon={showEndIcon ? <ArrowDropDown /> : undefined}
      >
        {props.children}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement={`${placement === "left" ? "left-start" : "bottom-start"}`}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "left" ? "left top" : "left bottom",
            }}
          >
            <Paper className={paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {options.map((option, index) => (
                    <MenuItem
                      key={index}
                      onClick={(e) => {
                        handleClose(e, option);
                      }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default Menu;
