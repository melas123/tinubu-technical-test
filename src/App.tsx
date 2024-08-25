import { ThemeProvider } from "@emotion/react";
import SearchAppBar from "./layout/app-bar/SearchAppBar";
import { createTheme } from "@mui/material";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#26BAD4",
    },
    secondary: {
      main: "#F5F5F5",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SearchAppBar />
      </ThemeProvider>
    </>
  );
}

export default App;
