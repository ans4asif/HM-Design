export const MyTheme = (mode = 'light') => {
  return {
    typography: {
      fontFamily: [
        'Sofia Pro',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ].join(','),
    },
    palette: {
      type: mode,
      common: {
        black: 'rgba(27, 27, 27, 1)',
        white: '#fff',
        on_surface: ' rgba(28, 27, 30, 0.15)',
        disabledWhite: 'rgba(255, 255, 255, 0.5)',
      },
      light: {
        focus: 'rgba(255, 255, 255, 0.12)',
        secondary: mode === 'dark' ? '#021434' : 'blue',
        secondaryContainer: 'rgba(236, 243, 252, 0.12)',
        outline: '#C9CBD1',
        on_surface: '#021434',
        on_surface_variant: '#6E7582',
      },
      dark: {
        dark: '#2A3135',
        on_surface: '#F7FDF9',
        on_surface_variant: '#E8E9EB',
      },
      background: { paper: '#fff', default: '#fafafa' },
      primary: {
        light: '#00B53F',
        main: 'rgba(0, 181, 63, 1)',
        dark: 'rgba(18, 87, 42, 1)',
        contrastText: '#fff',
        surfaceVariant: '#F8F9FA',
      },
      secondary: {
        light: '#021434',
        main: 'rgba(2, 20, 52, 1)',
        dark: 'rgba(159, 166, 180, 1)',
        contrastText: 'rgba(255, 255, 255, 1)',
      },
      readOnly: {
        light: {
          secondary: 'rgba(2, 20, 52, 0.12)',
          secondaryHover: '#374761',
          on_surface_variant: 'rgba(28, 27, 30, 0.08)',
        },
      },
      error: {
        light: 'rgba(255, 215, 215, 1)',
        main: 'rgba(186, 27, 27, 1)',
        dark: 'rgba(65, 0, 1, 1)',
        contrastText: '#fff',
      },
      text: {
        primary: 'rgba(2, 20, 52, 1)',
        secondary: 'rgba(110, 117, 130, 1)',
        disabled: 'rgba(237, 237, 237, 1)',
        // hint: "rgba(223, 225, 225, 1)",
      },
    },
  };
};
