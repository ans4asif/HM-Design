import { makeStyles } from '@mui/styles';

const useStyles = (props) => {
  const { variant } = props;
  return makeStyles((theme) => ({
    stepperBox: {
      backgroundColor:
        variant === 'dark' ? `${theme.palette.dark.dark}` : '#fff',
      padding: '10px',
    },
    stepper: {
      '& .MuiStepConnector-root': {
        borderLeft: '3px solid !important',
        borderRadius: '20px !important',
        borderTopLeftRadius: '0px !important',
        borderBottomLeftRadius: '0px !important',
        borderLeftColor: `${theme.palette.primary.light} !important`,
      },
      '& .MuiStepConnector-line': {
        border: 'none !important',
      },
    },
    stepp: {
      '& .MuiStepLabel-root': {
        padding: '0px',
      },
      '& .MuiStepLabel-iconContainer text': {
        display: 'none',
      },
      '& .MuiStepLabel-root': {
        '& .MuiStepLabel-iconContainer': {
          '& .MuiSvgIcon-root-MuiStepIcon-root.Mui-active': {
            border: '3px solid blue !important',
          },
        },
      },
    },
    stepLabel: {
      paddingTop: '0px !important',
      paddingBottom: '0px !important',
      '& .MuiStepLabel-iconContainer': {
        '& svg': {
          '& .MuiSvgIcon-root-MuiStepIcon-root.Mui-active': {
            color: 'blue !important',
          },
        },
      },
      '& .MuiStepLabel-label': {
        display: 'flex ',
        alignItems: 'center ',
        color: theme.palette.light.on_surface,
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '400',
      },
    },
    labelNo: {
      fontSize: '34px',
      fontWeight: '600',
      paddingRight: '10px',
      color:
        variant === 'dark'
          ? theme.palette.dark.on_surface
          : theme.palette.light.on_surface,
    },
    labelText: {
      display: 'flex',
      flexDirection: 'column',
      color:
        variant === 'dark'
          ? theme.palette.dark.on_surface
          : theme.palette.light.on_surface,
    },
    labelDescription: {
      display: 'block',
      fontSize: '14px',
      color: `${
        variant === 'dark'
          ? theme.palette.dark.on_surface_variant
          : theme.palette.light.on_surface_variant
      } `,
    },
    stepIcon: {
      color: 'white !important',
      border: `3px solid ${theme.palette.primary.light}`,
      borderRadius: '20px',
      opacity: '0.12',
      width: '20px !important',
      height: '20px !important',
    },
    activeStepIcon: {
      color: 'white ',
      border: `3px solid ${theme.palette.primary.light}`,
      borderRadius: '20px',
      opacity: '1',
      width: '20px !important',
      height: '20px !important',
    },
    completedStepIcon: {
      opacity: '1',
      color: `${theme.palette.primary.light} !important`,
      border: 'none',
      paddingLeft: '4px',
    },

    stepContent: {
      borderLeft: '3px solid !important',
      borderRadius: '20px !important',
      borderTopLeftRadius: '0px !important',
      borderBottomLeftRadius: '0px !important',
      borderLeftColor: `${theme.palette.primary.light} !important`,
      '& .MuiStepConnector-line': {
        opacity: '0.12 !important',
      },
    },
    btnWrap: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
    },
    btnBack: {
      padding: '10px 24px',
      border: `1px solid ${
        variant === 'dark'
          ? theme.palette.common.white
          : theme.palette.readOnly.light.on_surface_variant
      } !important`,
      borderRadius: '100px !important',
      color: `${
        variant === 'dark'
          ? theme.palette.common.white
          : theme.palette.readOnly.light.on_surface_variant
      } !important`,
    },
    btnNext: {
      padding: '10px 24px',
      boxShadow:
        '0px 3px 5px rgba(110, 117, 130, 0.2), 0px 1px 1px rgba(110, 117, 130, 0.3) !important',
      borderRadius: '100px !important',
    },
    finishTextHolder: {
      position: 'relative',
      marginTop: '10px',
      backgroundColor:
        variant === 'dark'
          ? `${theme.palette.dark.dark} !important`
          : '#fff !important',
      color: variant === 'dark' ? '#fff !important' : '',
      textAlign: 'left',
      '& span': {
        color: '#5CA7D4',
        cursor: 'pointer',
      },

      '& button': {
        position: 'absolute',
        right: '0px',
        bottom: '0px',
      },
    },
  }));
};

export default useStyles;
