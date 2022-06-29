import { AddAlarm } from "@mui/icons-material";
import React from "react";
import useStyles from "../../App.styles";
import Menu from "../Menu";

const MenuHolder = () => {
  const classes = useStyles();
  return (
    <div className={[classes.box].join(" ")}>
      <Menu
        mode="secondary"
        startIcon={<AddAlarm />}
        name="option1"
        width={3}
        placement="bottom"
        options={["option1", "option2", "option3"]}
        onClick={(option: string | undefined) => console.log(option)}
      />

      <Menu
        mode="secondary"
        startIcon={<AddAlarm />}
        width={3}
        name="option4"
        placement="bottom"
        options={["option1", "option2", "option3"]}
        onClick={(option: string | undefined) => console.log(option)}
      />
    </div>
  );
};

export default MenuHolder;
