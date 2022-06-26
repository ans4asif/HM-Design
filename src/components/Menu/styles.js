import { makeStyles } from "@mui/styles";

const useStyles = (props) =>
  makeStyles((theme) => ({
    focusVisible: {
      background: "red !important",
    },
    menuBtn: {
      // background:
      //   props.mode === "secondary" ? "red !important" : "blue !important",
      // padding: "10px 95px 10px 10px !important",
      // textAlign: "left",
      alignItems: "center !important",
      justifyContent: "start !important",
      width: `${props.width * 56}px`,
      color: `${
        props.mode === "secondary"
          ? theme.palette.common.white
          : theme.palette.common.black
      } !important`,
      "&:hover": {
        background:
          props.mode === "secondary"
            ? "rgba(236, 243, 252, 0.12) important"
            : "rgba(2, 20, 52, 0.05)!important",
      },
      "&:focus": {
        background:
          props.mode === "secondary"
            ? "rgba(236, 243, 252, 0.4) !important"
            : "rgba(2, 20, 52, 0.15) !important",
      },
      "&:disabled": {
        color: "rgba(28, 27, 30, 0.08) !important",
      },
    },
    paper: {
      background: `${theme.palette.primary.surfaceVariant} !important`,
      border: `1px solid ${theme.palette.primary.light}`,
      marginRight: `${props.placement === "left" ? "10px" : "0px"} !important`,
      maxWidth: "280px",
      width: `${props.width * 56}px`,
      boxShadow:
        "0px 8px 15px rgba(110, 117, 130, 0.15), 0px 1px 2px rgba(110, 117, 130, 0.3)",
      borderRadius: "3px",
      "& li": {
        fontSize: "14px",
        margin: "2px 0",
        "&:hover": {
          background: `${theme.palette.secondary.light}`,
        },
      },
    },
  }));

export default useStyles;
