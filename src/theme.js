export const MyTheme = {
  typography: {
    fontFamily: [
      "Sofia Pro",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  palette: {
    common: { black: "rgba(27, 27, 27, 1)", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "#00B53F",
      main: "rgba(0, 181, 63, 1)",
      dark: "rgba(18, 87, 42, 1)",
      contrastText: "#fff",
      surfaceVariant: "#F8F9FA",
    },
    secondary: {
      light: "rgba(2, 20, 52, 0.12)",
      main: "rgba(2, 20, 52, 1)",
      dark: "rgba(159, 166, 180, 1)",
      contrastText: "rgba(255, 255, 255, 1)",
    },
    error: {
      light: "rgba(255, 215, 215, 1)",
      main: "rgba(186, 27, 27, 1)",
      dark: "rgba(65, 0, 1, 1)",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(2, 20, 52, 1)",
      secondary: "rgba(110, 117, 130, 1)",
      disabled: "rgba(237, 237, 237, 1)",
      // hint: "rgba(223, 225, 225, 1)",
    },
  },
};
