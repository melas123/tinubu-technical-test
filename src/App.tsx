import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import "./App.css";
import SearchAppBar from "./layout/app-bar/SearchAppBar";
import Sidebar from "./layout/side-bar/Sidebar";
import MainRoutes from "./routes/MainRoutes";

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
        <Sidebar />
        <MainRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
