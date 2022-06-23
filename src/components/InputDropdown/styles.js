import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  dropdownInput: {
    width: "100%",
    border: "1px solid #ccc",
    display: "flex",
    alignItems: "center",
  },
  textField: {
    width: "100%",
    flexGrow: 1,
    borderRight: "1px solid red !important",
    "& div:first-child": {
      "&:hover": {
        "&:before": {
          border: "none",
        },
      },
      "&:before": {
        border: "none",
      },
    },
  },
  selectHolder: {
    display: "flex",
  },
  select: {
    minWidth: "200px",
  },
});

export default useStyles;
