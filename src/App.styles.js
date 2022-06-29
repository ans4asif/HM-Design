import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "8px 1px",

    /* hm/light/secondary */

    background: theme.palette.light.secondary,
    /* Elevation Dark/2 */

    boxShadow:
      "0px 2px 6px 2px rgba(0, 0, 0, 0.15) 0px 1px 2px rgba(0, 0, 0, 0.3)",
    borderRadius: "3px",
  },
}));

export default useStyles;
