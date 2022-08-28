import { makeStyles } from '@mui/styles';

const useStyles = (props) => {
  const { btnActive, variant } = props;
  return makeStyles((theme) => ({
    filterBtn: {
      position: 'relative',
      width: '123px',
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 24px',
      fontFamily: 'Sofia Pro',
      fontWeight: '500',
      fontStyle: 'normal',
      letterSpacing: '0.1px',
      fontSize: '14px',
      lineHeight: '20px',
      textTransform: 'uppercase',
      background: 'transparent',
      color: theme.palette.light.on_surface,
      border: '1px solid transparent',
      borderRadius: '100px',
      outline: 'none',
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.light.on_surface,
        background: theme.palette.readOnly.light.on_surface_variant,
        boxShadow:
          ' 0px 3px 5px rgba(110, 117, 130, 0.2), 0px 1px 1px rgba(110, 117, 130, 0.3)',
      },
      '&:focus': {
        background: theme.palette.common.white,
        boxShadow: 'none',
        border: '1px solid #0088FF',
      },
      '&:disabled': {
        color: theme.palette.readOnly.light.on_surface_variant,
        cursor: 'not-allowed',
        '&:hover': {
          background: theme.palette.common.white,
          boxShadow: 'none',
        },
      },
    },
    activeDot: {
      position: 'absolute',
      top: '5px',
      right: '10px',
      backgroundColor: theme.palette.primary.light,
      width: '5px',
      height: '5px',
      borderRadius: '100%',
    },
    dropDown: {
      width: '100%',
      maxWidth: '280px',
      padding: '8px 0px',
      background: `${
        variant === 'dark'
          ? theme.palette.dark.dark
          : theme.palette.primary.surfaceVariant
      } !important`,
      border: `1px solid ${theme.palette.primary.light}`,
      boxShadow:
        '0px 8px 15px rgba(110, 117, 130, 0.15), 0px 1px 2px rgba(110, 117, 130, 0.3)',
      borderRadius: '3px',
      fontFamily: 'Sofia Pro',
    },

    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0px',
      '& span:first-child': {
        cursor: 'pointer',
      },
    },
    list: {
      listStyle: 'none',
      paddingLeft: '0px',
      maxHeight: '300px',
      overflowX: 'hidden',
      overflowY: 'auto',
      '&::-webkit-scrollbar': {
        width: '0.4em',
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        backgroundColor: 'rgba(0,0,0,.15)',
        // outline: '1px solid #6E7582',
      },

      '& li': {
        position: 'relative',
        minWidth: '260px',
        padding: '10px 8px',
        '& span': {
          display: 'block',
        },
        display: 'flex',
        flexDirection: 'column',
        // gap: '10px',
        cursor: 'pointer',
        '&:hover': {
          background: `${theme.palette.readOnly.light.hover} !important`,
        },
      },
    },
    filterItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    appliedFilters: {
      justifyContent: 'center',
      textAlign: 'left',
      padding: ' 5px 16px 0px 30px',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '20px',
      color: theme.palette.light.on_surface_variant,
      wordBreak: 'break-all',
    },
    textHolder: {
      display: 'flex !important',
      gap: '8px',
    },
    btnTextField: {
      background: 'transparent',
      color: theme.palette.light.on_surface,
      border: 'none',
      textTransform: 'uppercase',
      fontFamily: 'Sofia Pro',
      fontSize: '14px',
      cursor: 'pointer',
    },
    btnHolder: {
      padding: '10px 16px',
      borderTop: '1px solid #C9CBD1',
      '& button': {
        padding: '8px 16px',
        borderRadius: '100px',
        boxShadow: 'none !important',
      },
    },
    itemHolder: {
      //   position: 'relative',
    },
    //helper class
    submenu: {
      position: 'absolute',
      right: '0px',
      left: '100px',
      zIndex: '9999',
    },
    opacity0: {
      opacity: '0 !important',
    },
  }));
};

export default useStyles;
