import TestForm from "./components/TestForm";

import "./App.css";
import TestProvider from "./common/TestProvider";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[900],
    },
  },
});

function App() {
  return (
    <TestProvider>
      <ThemeProvider theme={theme}>
        <Box className="App">
          <TestForm />
        </Box>
      </ThemeProvider>
    </TestProvider>
  );
}

export default App;
