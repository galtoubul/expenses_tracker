import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";
import "@mui/styles";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#29295d",
      contrastText: "#c8c8e0",
    },
    secondary: {
      main: "#f79970",
      contrastText: "#ffffff",
    },
  },
});

const AppThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default AppThemeProvider;
