import { makeStyles } from '@mui/styles';

const useStyles = (props) => {
  const { width, placement, variant, dropDownWidth } = props;
  return makeStyles((theme) => ({
    focusVisible: {
      background: 'red !important',
    },
    menuBtn: {
      position: 'relative',
      background:
        variant === 'dark' ? `${theme.palette.secondary.light} !important` : '',
      border:
        variant === 'light'
          ? `1px solid ${theme.palette.light.outline} !important`
          : '',
      alignItems: 'center !important',
      justifyContent: 'start !important',
      width: width ? `${width * 56}px` : '100%',
      color: `${
        variant === 'dark'
          ? theme.palette.common.white
          : theme.palette.common.black
      } !important`,
      '&:hover': {
        background:
          variant === 'dark'
            ? `${theme.palette.readOnly.light.secondaryHover} !important`
            : '',
      },
      '&:focus': {
        background:
          variant === 'dark'
            ? `${theme.palette.secondary.light} !important`
            : '',
        opacity: variant === 'dark' && '0.4 !important',
      },
      '&:disabled': {
        color: `${
          variant === 'dark'
            ? theme.palette.common.disabledWhite
            : theme.palette.common.black
        } !important`,
      },
      '& .MuiButton-endIcon': {
        // position: "absolute",
        // right: "10px",
      },
    },
    textHolder: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    text: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '5px',
    },
    popper: {
      maxWidth: '280px !important',
      width: '100% !important',
    },
    paper: {
      background:
        variant === 'dark'
          ? `${theme.palette.secondary.light} !important`
          : `${theme.palette.primary.surfaceVariant} !important`,
      color: `${
        variant === 'dark'
          ? theme.palette.common.white
          : theme.palette.common.black
      } !important`,
      border: `1px solid ${theme.palette.primary.light}`,
      marginRight: `${placement === 'left' ? '10px' : '0px'} !important`,
      marginTop: `${placement !== 'left' ? '10px' : '0px'} !important`,
      zIndex: '10 !important',
      maxWidth: '280px !important',
      width:
        dropDownWidth && dropDownWidth > 0
          ? `${dropDownWidth * 56}px !important`
          : '100% !important',
      boxShadow:
        '0px 8px 15px rgba(110, 117, 130, 0.15), 0px 1px 2px rgba(110, 117, 130, 0.3)',
      borderRadius: '3px',
      '& li': {
        fontSize: '14px',
        margin: '2px 0',
        '&:hover': {
          background:
            variant === 'dark'
              ? `${theme.palette.readOnly.light.secondaryHover} !important`
              : theme.palette.readOnly.light.secondary,
        },
      },
    },
  }));
};
export default useStyles;
