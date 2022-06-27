import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  dropdownInput: {
    width: "100%",
    border: "1px solid rgba(159, 166, 180, 0.4)",
    display: "flex",
    alignItems: "center",
    borderRadius: "40px",
    fontFamily: "Sofia Pro, sans-serif !important",
  },
  textField: {
    minWidth: "125px !important",
    width: "100%",
    flexGrow: 1,
    padding: "0px 8px !important",
    borderRight: "1px solid rgba(159, 166, 180, 0.4) !important",
    fontFamily: "Poppins",
    marginLeft: "10px !important",
    "& div:first-child": {
      "&:hover": {
        "&:before": {
          border: "none",
        },
      },
      "&:before": {
        border: "none",
      },
      "&:after": {
        border: "none",
      },
    },
    [theme.breakpoints.down(574)]: {
      minWidth: "125px !important",
    }
  },
  selectHolder: {
    display: "flex",
    alignItems: "center",
    "&:nth-child(2)": {
      marginRight: "10px",
    },
  },
  selectMenu: {
    margin: "10px",
    background: "#F8F9FA",
    border: "1px solid #00B53F",
    boxShadow:
      "0px 8px 15px rgba(110, 117, 130, 0.15), 0px 1px 2px rgba(110, 117, 130, 0.3)",
    borderRadius: "3px",
    "& ul": {
      backgroundColor: "#F8F9FA",
      border: "1px solid green",
    },
    "& li": {
      padding: "6px 16px",
      marginBottom: "5px",
      minHeight: "40px",
      "&:hover": {
        backgroundColor: "rgba(2, 20, 52, 0.12)",
      },
    },
    "& .Mui-selected": {
      backgroundColor: "rgba(2, 20, 52, 0.12) !important",
    },
  },
  select: {
    minWidth: "150px",
    marginRight: "60px",
    textAlign: "left",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
      //   #6E7582
    },
    [theme.breakpoints.down(574)]: {
      minWidth: "130px",
      marginRight: "5px",    }
  },
}));
export default useStyles;
