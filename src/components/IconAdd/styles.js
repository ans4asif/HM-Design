import { makeStyles } from "@mui/styles";

const styles = makeStyles({
  IconAdd: {
    display: "block",
    padding: "8px",
    width: "24px",
    height: "24px",
    background: "#00B53F",
    borderRadius: "60px",
    color: "#FFFFFF",
    cursor: "pointer",
    "&:hover": {
      filter:
        "drop-shadow(0px 3px 5px rgba(110, 117, 130, 0.2)) drop-shadow(0px 1px 1px rgba(110, 117, 130, 0.3))",
    },
    "&:focus": {
      color: "rgba(255, 255, 255, 0.12)",
      /* hm/read-only/light/focus */

      boxShadow:"0 0 2px #0088FF !important",
    },
  },
  disabled: {
    background: "rgba(28, 27, 30, 0.15)",
    color: "rgba(28, 27, 30, 0.15)",
    cursor: "not-allowed",
  },
});
export default styles;
