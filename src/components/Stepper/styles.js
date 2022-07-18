import { makeStyles } from "@mui/styles";

const useStyles = (props) => {
  const { activeStep, totalSteps } = props;
  console.log({ activeStep, totalSteps });
  return makeStyles((theme) => ({
    stepper: {
      "& .MuiStepConnector-root": {
        // display: "none"
        borderLeft: "3px solid !important",
        borderRadius: "20px !important",
        borderTopLeftRadius: "0px !important",
        borderBottomLeftRadius: "0px !important",
        borderLeftColor: `${theme.palette.primary.light} !important`,
      },
      // "& .MuiStep-root:nth-child(1)": {
      //   display: "none",
      // },
    },
    stepp: {
      "& .MuiStepLabel-root": {
        padding: "0px",
      },
      "& .MuiStepLabel-iconContainer text": {
        display: "none",
      },
      "& .MuiStepLabel-root": {
        "& .MuiStepLabel-iconContainer": {
          "& .MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
            border: "3px solid blue !important",
          },
        },
      },
    },
    stepLabel: {
      paddingTop: "0px !important",
      paddingBottom: "0px !important",
      "& .MuiStepLabel-iconContainer": {
        "& svg": {
          "& .MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
            color: "blue !important",
          },
        },
      },
      "& .MuiStepLabel-label": {
        display: "flex ",
        alignItems: "center ",
        color: theme.palette.light.on_surface,
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "400",
      },
    },
    labelNo: {
      fontSize: "34px",
      fontWeight: "600",
      paddingRight: "10px",
      color: theme.palette.light.on_surface,
    },
    labelText: {
      display: "flex",
      flexDirection: "column",
    },
    labelDescription: {
      display: "block",
      fontSize: "14px",
      color: `${theme.palette.light.on_surface_variant} `,
    },
    stepIcon: {
      color: "white !important",
      border: `3px solid ${theme.palette.primary.light}`,
      borderRadius: "20px",
      opacity: "0.12",
      width: "20px !important",
      height: "20px !important",
    },
    activeStepIcon: {
      color: "white ",
      border: `3px solid ${theme.palette.primary.light}`,
      borderRadius: "20px",
      opacity: "1",
      width: "20px !important",
      height: "20px !important",
    },
    completedStepIcon: {
      opacity: "1",
      color: `${theme.palette.primary.light} !important`,
      border: "none",
      paddingLeft: "4px",
    },

    stepContent: {
      borderLeft: "3px solid !important",
      borderRadius: "20px !important",
      borderTopLeftRadius: "0px !important",
      borderBottomLeftRadius: "0px !important",
      borderLeftColor: `${theme.palette.primary.light} !important`,
      "& .MuiStepConnector-line": {
        opacity: "0.12 !important",
      },
    },
  }));
};

export default useStyles;
