import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  IconAdd: {
    display: "block",
    padding: "8px",
    width: "24px",
    height: "24px",
    background: theme.palette.primary.light,
    borderRadius: "60px",
    color: theme.palette.common.white,
    cursor: "pointer",
    "&:hover": {
      filter:
        "drop-shadow(0px 3px 5px rgba(110, 117, 130, 0.2)) drop-shadow(0px 1px 1px rgba(110, 117, 130, 0.3))",
    },
    "&:focus": {
      color: theme.palette.light.focus,
      /* hm/read-only/light/focus */

      boxShadow: "0 0 2px #0088FF !important",
    },
  },
  disabled: {
    background: theme.palette.common.on_surface,
    color: "rgba(28, 27, 30, 0.15)",
    cursor: "not-allowed",
  },
}));
export default styles;
