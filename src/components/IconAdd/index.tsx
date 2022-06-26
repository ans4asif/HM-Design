import React from "react";
import AddIcon from "@mui/icons-material/Add";
import useStyles from "./styles";

interface Props {
  disabled?: boolean;
  onClick: () => void;
}
const IconAdd: React.FC<Props> = ({ disabled, onClick }) => {
  const classes = useStyles();
  return (
    <span
      tabIndex={0}
      className={[classes.IconAdd, disabled ? classes.disabled : ""].join(" ")}
      onClick={onClick}
    >
      <AddIcon />
    </span>
  );
};

export default IconAdd;
