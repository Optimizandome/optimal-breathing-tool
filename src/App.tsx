import { ThemeProvider, Theme } from "theme-ui";
import "../src/styles/global.css";

import { theme } from "styles";
import { VisualBreathing } from "components";

function App() {
  return (
    <ThemeProvider theme={theme as Theme}>
      <VisualBreathing />
    </ThemeProvider>
  );
}

export default App;
