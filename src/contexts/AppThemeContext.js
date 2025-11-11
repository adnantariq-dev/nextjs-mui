"use client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
export default function AppThemeProvider({ children }) {
  const theme = createTheme({
    typography: {
      fontFamily: "var(--font-outfit), sans-serif",
    },
    colorSchemes: {
      light: {
        palette: {
          primary: { main: "#f15024" },
          secondary: { main: "#001d21", light: "#01333a" },
          background: { default: "#ffffff", paper: "#f6f9f9" },
          text: { main: "white", ligh: "black", gray: "#68757cff" },
        },
      },
      // dark: {
      //   palette: {
      //     primary: { main: "#f15024" },
      //     secondary: { main: "#01333a" },
      //     background: { default: "#001d21", paper: "#012a2f" },
      //   },
      // },
    },
    cssVariables: {
      colorSchemeSelector: "class",
    },
  });

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
