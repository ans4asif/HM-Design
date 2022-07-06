import { AddAlarm } from "@mui/icons-material";
import React from "react";
import useStyles from "../../App.styles";
import Menu from "../Menu";

const MenuHolder = () => {
  const classes = useStyles();
  return (
    <div className={[classes.boxx].join(" ")}>
      <Menu
        variant="dark"
        width={3}
        dropDownWidth={3}
        placement="bottom"
        options={["option1", "option2", "option3"]}
        onClick={(option: string | undefined) => console.log(option)}
      >
        variant 2
      </Menu>

      <Menu
        variant="dark"
        startIcon={<AddAlarm />}
        showEndIcon
        width={3}
        dropDownWidth={3}
        placement="bottom"
        options={["option1", "option2", "option3"]}
        onClick={(option: string | undefined) => console.log(option)}
      >
        option 2
      </Menu>
    </div>
  );
};

export default MenuHolder;
